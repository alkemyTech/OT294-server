const { S3Client, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3')
const {getSignedUrl} = require('@aws-sdk/s3-request-presigner')

const client = new S3Client({
    region: AWS_REGION,
    credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_KEY_ID
    }
})


const uploadFile = async (file) => {
    const uploadParams = {
        Bucket: AWS_BUCKET,
        Key: file.originalname,
        Body: file.buffer
    }
    const command = new PutObjectCommand(uploadParams)
    return await client.send(command)
}

const getFileUrl = async (filename) => {
  const command = new GetObjectCommand({
    Bucket: AWS_BUCKET,
    Key: filename
  })
  return await getSignedUrl(client,command, {expiresIn: 3600})
}

module.exports = {uploadFile, getFileUrl};