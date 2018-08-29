const { Client, Util } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const fs = require("fs");
const client = new Client({ disableEveryone: true });
const youtube = new YouTube("GOOGLE_API_KEY");
const queue = new Map();

/* One-Line Events */
client.on('warn', console.warn);
client.on('error', console.error);
client.on('ready', () => console.log('Succefuly Loaded Music Plugin!'));
client.on('disconnect', () => console.log("I've been disconected, attempting to re-connect.."));
client.on('reconnecting', () => console.log('Reconnecting Now..'));

/* Rest Of The Code */
client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;

	let PREFIX = "z!";

	if (!msg.content.startsWith(PREFIX)) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(PREFIX.length)

	if (command === 'play') {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send("Oops, seems that you need to be in a voice channel to play music!");
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('I don\'t have requiered permissions to connect, please make sure i have propper permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('I don\'t have requiered permissions to speak, please make sure i have propper permissions!');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					msg.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Please provide a value from ranging from 1 to 10 wich match desired song.
					`);
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('You don\'t specifyed any valid option, aborted!');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('I couldn\'t obtain any search results.');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === 'skip') {
		if (!msg.member.voiceChannel) return msg.channel.send('You aren\'t connected to any voice channel!');
		if (!serverQueue) return msg.channel.send('Nothing playing, so i can\'t skip anything for you!');
		serverQueue.connection.dispatcher.end('Alright, song skiped!');
		return undefined;
	} else if (command === 'mode') {
		if (!msg.member.voiceChannel) return msg.channel.send('You aren\'t connected to any voice channel!');
		let mode = "None";
		let vol = serverQueue.volume;
		if (vol > 5) mode = "Low"; 
		if (vol > 15) mode = "Medium"; 
		if (vol > 25) mode = "High"; 
		if (vol > 35) mode = "Earrape";
		if(!args[1])
		return msg.channel.send(`Current Mode is: **${mode}**`);
		
		if(args[1] === "low") {
		let lvol = 7;
		serverQueue.volume = 7;
		serverQueue.connection.dispatcher.setVolumeLogarithmic(lvol / 5);
		msg.channel.send("Mode set to Low!");
		} else if (args[1] === "medium") {
		let mvol = 18;
		serverQueue.volume = 18;
		serverQueue.connection.dispatcher.setVolumeLogarithmic(mvol / 5);
		msg.channel.send("Mode set to Medium!");
		} else if (args[1] === "high") {
		let hvol = 29;
		serverQueue.volume = 29;
		serverQueue.connection.dispatcher.setVolumeLogarithmic(hvol / 5);
		msg.channel.send("Mode set to High!");
		} else if (args[1] === "earrape") {
		let evol = 45;
		serverQueue.volume = 45;
		serverQueue.connection.dispatcher.setVolumeLogarithmic(evol / 5);
		msg.channel.send("Mode set to Earrape!");
		} else {
		return msg.channel.send("Not a valid mode.\nValid Modes: `low`,`medium`,`high` and `earrape`");
		}
	} else if (command === 'stop') {
		if (!msg.member.voiceChannel) return msg.channel.send('You aren\'t connected to any voice channel!');
		if (!serverQueue) return msg.channel.send('Nothing playing, so i can\'t stop streaming!');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Alright, streaming stopped!');
		return undefined;
	} else if (command === 'volume') {
		if (!msg.member.voiceChannel) return msg.channel.send('You aren\'t connected to any voice channel!');
		if (!serverQueue) return msg.channel.send('Nothing playing, i can\'t see how i can help you further!');
		if(isNaN(args[1])) return msg.channel.send(`Can't set volume to ${args[1]}`);
		if (!args[1]) return msg.channel.send(`The current volume is: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(`Volume set to: **${args[1]}**`);
	} else if (command === 'np') {
		if (!serverQueue) return msg.channel.send('Nothing playing, i can\'t see how i can help you further!');
		return msg.channel.send(`🎶 Curently playing: **${serverQueue.songs[0].title}**`);
	} else if (command === 'queue') {
		if (!serverQueue) return msg.channel.send("Queue is empty!");
		return msg.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
	} else if (command === 'pause') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('⏸ Paused the music streaming!');
		}
		return msg.channel.send('Nothing playing, i can\'t see how i can help you further!');
	} else if (command === 'resume') {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('▶ Resumed the music streaming!');
		}
		return msg.channel.send('Nothing playing, i can\'t see how i can help you further!');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`✅ **${song.title}** has been added to the queue!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended..');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`🎶 Start playing: **${song.title}**`);
}

client.login("DISCORD_BOT_TOKEN");
