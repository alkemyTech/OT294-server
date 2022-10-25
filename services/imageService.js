const AWS = require('aws-sdk')
require("dotenv").config();

class Image {
  uploadImage(name, file){
  let myFile = file.originalname.split(".");
    const fileType = myFile[myFile.length - 1];
    const s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      correctClockSkew: true,
    });
    return new Promise((resolve, reject) => {
      const params = {
        Bucket: process.env.AWS_BUCKET,
        Key: `${name}.${fileType}`,
        ContentType: file.originalname,
        Body: file.buffer,
        ACL: "public-read",
      };
        s3.upload(params, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(`https://${process.env.AWS_BUCKET}.s3.amazonaws.com/${params.Key}`);
        }
      });
    });
  }


}

module.exports = Image