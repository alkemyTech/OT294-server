// const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
// const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
// const {Slides} = require('../models')

const AWS = require('aws-sdk')

require("dotenv").config();

// const client = new S3Client({
//     region: process.env.AWS_REGION,
//     credentials: {
//         accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//         secretAccessKey: process.env.AWS_SECRET_KEY_ID
//     }
// });


// const uploadFile = async (file) => {
//     const uploadParams = {
//         Bucket: process.env.AWS_BUCKET,
//         Key: file.originalname,
//         Body: file.buffer
//     };
//     const command = new PutObjectCommand(uploadParams);
//     return await client.send(command);
// };

// const getFileUrl = async (filename) => {
//     const command = new GetObjectCommand({
//         Bucket: process.env.AWS_BUCKET,
//         Key: filename
//     });
//     return await getSignedUrl(client, command, { expiresIn: 3600 });
// };


class Image {
   constructor() {
    this.s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
  }

  uploadImage(file){
    return new Promise((resolve, reject) => {
      const params = {
        Bucket: process.env.AWS_BUCKET,
        Key: file.filename,
        ContentType: file.originalname,
        Body: file.buffer,
        ACL: "public-read",
      };
      this.s3.upload(params, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(`https://${process.env.AWS_BUCKET}.s3.amazonaws.com/${Key}`);
        }
      });
    });
  }


}

module.exports = Image