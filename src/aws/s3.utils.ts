import { BadRequest, NotFound } from '@tsed/exceptions';
import AWS from 'aws-sdk';
import NodeCache from 'node-cache';

const s3 = new AWS.S3();
const s3Cache = new NodeCache({ stdTTL: 300, checkperiod: 480 });

/**
 * Grab an object from s3.
 * e.g. s3://my-bucket/path/to/file.txt
 * bucket: my-bucket, key: path/to/file.txt
 * @param bucket Bucket containing object.
 * @param key Key path to object.
 */
export const getObject = async (bucket: string, key: string): Promise<AWS.S3.Body> => {
  const s3Path = `s3://${bucket}/${key}`;
  try {
    const params = {
      Bucket: bucket,
      Key: key,
    };
    const objectMetadata = await s3.headObject(params).promise();
    const cacheKey = objectMetadata.ETag ?? s3Path;
    const cachedObject = s3Cache.get(cacheKey) as AWS.S3.GetObjectOutput;
    if (cachedObject) {
      return cachedObject;
    }
    const object = await s3.getObject(params).promise();
    if (!object.Body) {
      throw new NotFound(`Object ${s3Path} does not exist`);
    }
    s3Cache.set(cacheKey, object.Body);
    return object.Body;
  } catch {
    throw new BadRequest(`Unable to satisfy object request: ${s3Path}`);
  }
};
