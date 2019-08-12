import {
  MongoClient,
  MongoClientOptions,
  Collection,
  UpdateOneOptions,
  FilterQuery,
  UpdateManyOptions, ReplaceOneOptions, CollectionInsertOneOptions, UpdateQuery, CommonOptions
} from 'mongodb'
import { Debug } from '@helpers/debug'

const debug = new Debug('WrnMongo')

class BaseError extends Error {
  constructor(message: string) {
    debug.extend('BaseError')
    debug.error(message)
    super(message)
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }
}

export class InternalError extends BaseError {
  constructor(error: Error) {
    debug.extend('InternalError')
    debug.error(error.message)
    super(error.message)
    // @ts-ignore
    this.data = { error }
  }
}

export class InvalidCollectionException extends BaseError {
  constructor(collectionName: string) {
    const message = `${collectionName} is not a valid collection name`
    debug.extend('InvalidCollectionException')
    debug.error(message)
    super(message)
  }
}

interface UpdateReturn {
  /** Is 1 if the command executed correctly. */
  ok: number,
  /** The total count of documents queried. */
  n: number,
  /** The total count of documents modified. */
  nModified: number
}

interface DeleteReturn {
  /** Is 1 if the command executed correctly. */
  ok?: number
  /** The total count of documents deleted. */
  n?: number
}

/** WrnMongo is a Mongo driver wrapper, it's function is to be the single source of truth
 * for mongoDB operations */
export class MongoService<T> {

  /** Connection parameters */
  private collectionName: string

  /** Mongo wrapped classes */
  protected collection: Collection<T>

  /** Class constructor */
  constructor(collectionName: string) {
    if (!mongoose.connection.collections[collectionName]) {
      throw new InvalidCollectionException(collectionName)
    }
    this.collectionName = collectionName
    /** Uses mongoose connection */
    this.collection = mongoose.connection.collection(this.collectionName)
  }

  /**
   * Insert Operations
   * */

  /** Insert one document and throws if it is already in DB
   * @param doc - if instantiated with any type, is anything you want to save in db
   * otherwise, it will run it throught the T schema before inserting
   * @param options - mongo options
   * @return - the insertedId string */
  protected async insertOne(doc: T, options?: CollectionInsertOneOptions): Promise<string> {
    try {
      return (await this.collection.insertOne(doc)).insertedId.toHexString()
    } catch (e) {
      throw new InternalError(e)
    }
  }

  /** Insert many documents and throws if it is already in DB
   * * @param docs - if instantiated with any type, is anything you want to save in db
   * otherwise, it will run it throught the T schema before inserting
   * @param options - mongo options*/
  protected async insertMany(docs: T[], options?: CollectionInsertOneOptions) {
    try {
      return await this.collection.insertMany(docs)
    } catch (e) {
      throw new InternalError(e)
    }
  }

  /**
   * Read Operations
   * */
  /** Returns an array with the found docs or empty array
   * @param query - the query to be performed */
  protected async find(query?: FilterQuery<T>) {
    try {
      return await this.collection.find(query).toArray()
    } catch (e) {
      throw new InternalError(e)
    }
  }

  /** Returns an object with the found doc or null
   * @param query - the query to be performed */
  protected async findOne(query?: FilterQuery<T>) {
    try {
      return await this.collection.findOne(query)

    } catch (e) {
      throw new InternalError(e)
    }
  }

  /**
   * Update operations
   * */
  /** Updates one document, returns information in form of UpdateReturn type
   * @param filter - the filter to be performed
   * @param update - the Mongo update obj
   * @param options - mongo options*/
  protected async updateOne(filter: FilterQuery<T>,
                            update: T | UpdateQuery<T>,
                            options?: UpdateOneOptions): Promise<UpdateReturn> {
    try {
      return (await this.collection.updateOne(filter, update, options)).result

    } catch (e) {
      throw new InternalError(e)
    }
  }

  /** Updates many documents, returns information in form of UpdateReturn type
   * @param filter - the filter to be performed
   * @param update - the Mongo update obj
   * @param options - mongo options*/
  protected async updateMany(filter: FilterQuery<T>,
                             update: T | UpdateQuery<T>,
                             options?: UpdateManyOptions): Promise<UpdateReturn> {
    try {
      return (await this.collection.updateMany(filter, update, options)).result

    } catch (e) {
      throw new InternalError(e)
    }
  }

  /**
   * Delete operations
   * */
  /** Replaces one document, returns information in form of DeleteReturn type
   * @param filter - the filter to be performed
   * @param doc - the document to replace the filtered one
   * @param options - mongo options*/
  protected async replaceOne(filter: FilterQuery<T>, doc: T, options?: ReplaceOneOptions): Promise<DeleteReturn> {
    try {
      return (await this.collection.replaceOne(filter, doc, options)).result
    } catch (e) {
      throw new InternalError(e)
    }
  }

  /** Deletes one document, returns information in form of DeleteReturn type
   * @param filter - the filter to be performed
   * @param options? - Mongo options obj*/
  protected async deleteOne(filter: FilterQuery<T>, options?: CommonOptions): Promise<DeleteReturn> {
    try {
      return (await this.collection.deleteOne(filter, options)).result
    } catch (e) {
      throw new InternalError(e)
    }

  }

  /** Deletes many documents, returns information in form of DeleteReturn type
   *
   * @param filter - the filter to be performed
   * @param options? - Mongo options obj*/
  protected async deleteMany(filter: FilterQuery<T>, options?: CommonOptions): Promise<DeleteReturn> {
    try {
      return (await this.collection.deleteMany(filter, options)).result
    } catch (e) {
      throw new InternalError(e)
    }
  }

}
