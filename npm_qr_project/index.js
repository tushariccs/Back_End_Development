import inquirer from "inquirer";
import qr_image from "qr-image";
import fs from "fs";
// const qr_image = require("qr-image");

inquirer.prompt([{ message: "Type the url: ", name: "URL" }])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = (answers.URL)
    var qr_img = qr_image.image(url);
   
    qr_img.pipe(fs.createWriteStream("qr_img.png"))
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
