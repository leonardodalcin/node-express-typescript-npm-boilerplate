// // TODO
// import path from 'path'
// // import { getFileFromS3 } from '@warreninc/services/aws'
// import { AWSError } from 'aws-sdk'
// // params: S3.Types.PutObjectRequest, callback?: (err: AWSError, data: S3.Types.PutObjectOutput
//
// export async function getConfigFile(file: string): Promise<any> {
//   const { S3_CONFIG_BUCKET } = process.env
//
//   if (S3_CONFIG_BUCKET) {
//     // debug.info('Using config from S3')
//     // debug.info(`S3_CONFIG_BUCKET: ${S3_CONFIG_BUCKET}`)
//     // debug.info(`File: ${file}`)
//     // debug.info(`FULL PATH: ${S3_CONFIG_BUCKET}/config/${service}/${file}`)
//
//     // const { getFileFromS3 } = require(`${global.__services_path}/aws`)
//     const targetFile = path.join(__dirname, file)
//
//     // return getFileFromS3(`${S3_CONFIG_BUCKET}/config/${service}`, file, targetFile)
//   } else {
//     throw new Error('S3_CONFIG_BUCKET not setten in process.env')
//   }
// }
