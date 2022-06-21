require("dotenv/config");
require("./handle-exceptions");

const { Client, Intents, Collection } = require("discord.js");
const discordModals = require("discord-modals");
const config = require("./config");

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
	partials: ["MESSAGE", "CHANNEL"],
});

discordModals(client);
client.commands = new Collection();

// console.log(chalk.red("LOADING COMMANDS..."));
// for (file of fs.readdirSync("./commands").filter((f) => f.endsWith(".js"))) {
// 	const cmd = require(`./commands/${file}`);
// 	client.commands.set(cmd.name, cmd);
// 	console.log(chalk.green(`Loaded ${cmd.name}`));
// }

// console.log(chalk.red("\n\nLOADING EVENTS..."));
// for (file of fs.readdirSync("./events").filter((f) => f.endsWith(".js"))) {
// 	const event = require(`./events/${file}`);
// 	client.on(event.name, (...args) => event.execute(client, ...args));
// 	console.log(chalk.green(`Loaded ${event.name}`));
// }

// client.on("messageCreate", async (message) => {
// 	if (message.author.bot) return;
// 	if (
// 		!message.content.startsWith("<@" + client.user.id + ">") &&
// 		!message.content.startsWith("<@!" + client.user.id + ">") &&
// 		!message.content.startsWith(prefix)
// 	) {
// 		return;
// 	}
// 	let split = message.content.split(" ");
// 	let search = split[1];
// 	if (message.content.startsWith(prefix)) search = split[0].slice(prefix.length);
// 	let command =
// 		client.commands.get(search) ||
// 		client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(search));
// 	let i = 1;
// 	if (message.content.startsWith(prefix)) i++;
// 	while (i <= 2) {
// 		i++;
// 		split.shift();
// 	}
// 	try {
// 		await command.execute(client, message, split);
// 	} catch {}
// });

client.login(config.discordToken);
