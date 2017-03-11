const request = require('request')
const cheerio = require('cheerio')
const url = 'https://nodejs.org/en/'

const exec = require('child_process').exec;
const cmd = 'node -v';


request(url, (err, res, body)=>{
  const $ = cheerio.load(body);
  const currentNodeVersion = $('.home-downloadbutton')
  const currentNodeVersionText =$('.home-downloadbutton').text();

  console.log(currentNodeVersionText);

})

exec(cmd,(error, stdout, stderr) => {
  if(error){
    console.log(error);
  }
  else{
    console.log(stdout);
  }
});
