const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
  console.log('bot opérationnel');
});

client.on('message', (message) => {
  if (message.content === `${prefix} Hello`) {
      message.channel.send('Hello dear friend, what can I do for you?');
  }
    else if (message.content === `${prefix} Beer`) {
        message.channel.send('Here is your beer traveler!🍺');
  }
    else if (message.content === `${prefix} Drunk`) {
      message.channel.send('I cannot give you another beer if you do not succeed to answer to some questions! Take the test on https://quipoquiz.com/fr/index');
  }
    else if (message.content === `${prefix} Test 0/5`) {
      message.channel.send('Hmm I think you may be too drunk to take another beer. Do you want to order something to eat?🍔🍟');
  }
  else if (message.content === `${prefix} Test 1/5`) {
      message.channel.send('Hmm I think you may be too drunk to take another beer. Do you want to order something to eat?🍔🍟');
  }
  else if (message.content === `${prefix} Test 2/5`) {
      message.channel.send('Hmm I think you may be too drunk to take another beer. Do you want to order something to eat?🍔🍟');
  }
  else if (message.content === `${prefix} Test 3/5`) {
      message.channel.send("Let's give you a beer for your effort my friend!🍺");
  }
  else if (message.content === `${prefix} Test 4/5`) {
      message.channel.send("Let's give you a beer for your effort my friend!🍺");
  }
  else if (message.content === `${prefix} Test 5/5`) {
      message.channel.send("Let's give you a beer for your effort my friend!🍺");
  }
  else if (message.content === `${prefix} Burger`) {
      message.channel.send('It is a nice idea not to drink too much and eat some food, we care about your health ⛺At the Fireside⛺!');
  }
});

client.login(process.env.TOKEN);