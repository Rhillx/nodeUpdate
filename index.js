const osmosis = require ('osmosis')
const url = 'https://nodejs.org/en/'
const anchor = '//a[@class="home-downloadbutton"]'
const exec = require('child_process').exec;
const cmd = 'node -v'

osmosis
.get(url)
.find(anchor)
.follow('@href')
.log(console.log)
.error(console.log)
.debug(console.log)

.data((listing)=>{
  exec(cmd, (err, stdout)=>{
    if (err){
      console.log(err);
    }
    else{
      console.log(stdout);
    }
  })


});
