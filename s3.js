require('dotenv').config()
const S3 = require('aws-sdk/clients/s3')
const fs = require('fs')


const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY
const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})
async function uploadFile(file) {
    //console.log('file',file.name)
    const uploadParams = {
        Bucket: bucketName,
        Body: file.data,
        Key: `fileupload/scanskill-${Date.now()}-${file.name}`, // put all image to fileupload folder with name scanskill-${Date.now()}${file.name}`

    }
    const data = await s3.upload(uploadParams).promise()
    //console.log('data',data)
    return data.Location
}
exports.uploadFile = uploadFile