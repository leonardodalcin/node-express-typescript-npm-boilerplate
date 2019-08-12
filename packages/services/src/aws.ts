// 'use strict'
// TODO
// // Libraries
// import fs from 'fs'
// import aws from 'aws-sdk'
// import { promisify } from 'util'
//
// class AWS {
//   _key: string
//   _secret: string
//
//   constructor () {
//     this._key = global.__config.aws.key || process.env.AWS_KEY
//     this._secret = global.__config.aws.secret || process.env.AWS_SECRET
//
//     aws.config.update({
//       accessKeyId: this._key,
//       secretAccessKey: this._secret,
//     })
//   }
//
//   async uploadDocument (fromPath: string, toName: string): Promise<void> {
//     let name = toName
//     if (global.__config.aws.path) {
//       name = global.__config.aws.path.replace(/\/*$/g, '')
//       name = [name, toName].join('/')
//     }
//     const fileStream = fs.createReadStream(fromPath)
//
//     fileStream.on('error', err => {
//       throw new err
//     })
//
//     fileStream.on('open', async () => {
//       const s3 = new aws.S3()
//       const s3PutObject = promisify(s3.putObject)
//       await s3PutObject({
//         Bucket: global.__config.aws.bucket,
//         Key: name,
//         Body: fileStream,
//       })
//       return name
//     })
//   }
//
// ),
//
//   removeDocument: path
// =>
//
//   Promise (
//
// (
//   resolve
// ,
//   reject
// ) => {
//   const
//   _c = global.__config.aws.uploads
//   const
//   s3 = new AWS.S3()
//   s3
// .
//
//   deleteObject ({
//     Bucket: _c.bucket,
//     Key: path,
//   }
//
// (
//   err
// ,
//   data
// ) => {
//   if (err) {
//     reject(err)
//   }
//
//   else {
//   resolve ()
// }
// })
// }),
//
// getFileFromS3: (bucket, key, targetFile) => Promise((resolve, reject) => {
//   const config = {}
//   if (process.env.AWS_KEY && process.env.AWS_SECRET) {
//     global.__config.accessKeyId = process.env.AWS_KEY
//     global.__config.secretAccessKey = process.env.AWS_SECRET
//   }
//   const s3 = new AWS.S3(global.__config)
//   const file = fs.createWriteStream(targetFile)
//
//   info('Getting file from s3')
//   info(`Attempting to get s3://${bucket}/${key}`)
//
//   s3.getObject({
//     Bucket: bucket,
//     Key: key,
//   }).createReadStream().on('error', reject).pipe(file).on('finish', () => {
//     info(`Got file from s3 and written it to ${targetFile}`)
//     resolve()
//   }).on('error', reject)
// })
// }
//
// // INTERNAL -------------------------------------------------------------------
//
// module.exports = aws
