const { S3Client, PutObjectCommand, GetObjectCommand } = require("@process.env.aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
require("dotenv").config();

const client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_KEY_ID
    }
});


const uploadFile = async (file) => {
    const uploadParams = {
        Bucket: process.env.AWS_BUCKET,
        Key: file.originalname,
        Body: file.buffer
    };
    const command = new PutObjectCommand(uploadParams);
    return await client.send(command);
};

const getFileUrl = async (filename) => {
    const command = new GetObjectCommand({
        Bucket: process.env.AWS_BUCKET,
        Key: filename
    });
    return await getSignedUrl(client, command, { expiresIn: 3600 });
};

module.exports = { uploadFile, getFileUrl };