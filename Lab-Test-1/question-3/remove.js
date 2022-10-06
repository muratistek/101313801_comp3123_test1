const fs = require('fs')






try {
  if (fs.existsSync('./Logs')) {
    // Removing files
    for (let i = 0; i < 10; i++) {
      fs.unlink(`./Logs/log${i}.txt`, function (err) {
        if (err) throw err;
        console.log(`delete files...log${i}.txt`);
      });
    }

    // Removing Folder
    fs.rmdir('./Logs', err => {
      if (err) {
        throw err
      }
      console.log('Directory is deleted.')
    })
  }
  else {
    console.log("The directory does not exist")
  }
}
catch (e) {
  console.log("Error occurred");
}
