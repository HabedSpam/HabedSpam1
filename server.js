const Discord = require("discord.js");
const myid = ['580906577351933955'];
const prefix = ['$'];
const cmd = require("node-cmd")
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ

client.login("NzQ0MTg2NjM3OTU2ODA4NzY0.XzfkWw.HRW8RtSDM0ngtUbmxbjlhnvm51I");
client2.login("NzQ0MTg3MzE4Nzk3MjA1NjA1.Xzfk3g.WHBnwbtPPlUaAgZ9mwUEazB8gws");
client3.login("NzQ0MTg3ODYyNDA0MzAwODUw.XzfliA.uE0-eRsNNxxpD6VoWBtR8lErMuA");
client4.login("NzQ0MTg0OTYxNzk5ODE1MjM4.XzfinQ.vmZUfs7lLdXs_ZHhTrs5Oraibkc");
client5.login("NzQ0MTg1NDg0NTM5OTg1OTQz.XzfjKg.gtIxA_p_eL98UMR6OKViZb2hDOU");
client6.login("NzQ0MTg2MDQwNTI0MzQxMjk5.Xzfjsg.ow5Y028gDeSBqRQvB3p8rDYeX_Y");


//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ

client.on('message', message => {
  if (message.content === prefix+'d') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s1')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client2.on('message', message => {
  if (message.content === prefix+'d') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p') {
message.channel.send('#profile')
  }
   if(message.content === prefix+'r'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s2')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client3.on('message', message => {
  if (message.content === prefix+'d') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s3')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client4.on('message', message => {
  if (message.content === prefix+'d') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s4')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client5.on('message', message => {
  if (message.content === prefix+'d') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s5')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client6.on('message', message => {
  if (message.content === prefix+'d') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s6')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});


//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ

client.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client2.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client3.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client4.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client5.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client6.on('message', message => {
if (message.content === prefix + 'fast 1k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 1000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 2k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 2000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 3k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 3000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 4k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 5k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 6k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 6000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 7k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 7000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 8k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 8000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 9k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
if (message.content === prefix + 'fast 10k') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }
});


//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ


client.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client2.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client3.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client4.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client5.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client6.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});


//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ


client.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client2.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client3.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client4.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client5.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})

client6.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot Stoped")
  }
})


//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ


client.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``1`` ")
    }
});

client2.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``2`` ")
    }
});

client3.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``3`` ")
    }
});

client4.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``4`` ")
    }
});

client5.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``5`` ")
    }
});

client6.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``6`` ")
    }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ