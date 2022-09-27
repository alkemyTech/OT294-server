const { S3Client, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3')
const {region, Bucketname, secretAccessKey, accessKeyId} = require('./config')
const {getSignedUrl} = require('@aws-sdk/s3-request-presigner')

const client = new S3Client({
    region: region,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
    }
})


const uploadFile = async (file) => {
    const uploadParams = {
        Bucket: Bucketname,
        Key: file.originalname,
        Body: file.buffer
    }
    const command = new PutObjectCommand(uploadParams)
    return await client.send(command)
}

const getFileUrl = async (filename) => {
  const command = new GetObjectCommand({
    Bucket: Bucketname,
    Key: filename
  })
  return await getSignedUrl(client,command, {expiresIn: 3600})
}

module.exports = {uploadFile, getFileUrl};