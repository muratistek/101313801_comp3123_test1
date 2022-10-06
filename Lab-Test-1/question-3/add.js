const fs = require('fs')

// Creating new directory


try {
  if (fs.existsSync('./Logs')) {
    console.log("The directory exists")
  }
  else {
    fs.mkdir('./Logs', err => {
      if (err) {
        throw err
      }
      console.log('Directory is created.')
    })
  }
}
catch (e) {
  console.log("Error occurred");
}


for (let i = 0; i < 10; i++) {
  fs.appendFile(`./Logs/log${i}.txt`, "Hello from Murat", (err) => {
    if (err) throw err;
    console.log(`log${i}.txt`);
  })
}