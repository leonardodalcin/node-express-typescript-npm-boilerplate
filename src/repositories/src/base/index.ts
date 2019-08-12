import { RepositoryItemException } from '@repositories/password-reset-token'

export class BaseRepository<T> {
  /** Needed as a interface checker between BaseRepository and its childs*/
  protected writeItemConstructor: (obj: any) => T
  protected readItemConstructor: (obj: any) => T
  // @ts-ignore
  private mongooseModel: Model<T>
  
  private validateMongooseModelName(mongooseModelName: string): void {
    if (!mongoose.modelNames().includes(mongooseModelName)) throw new Error()
  }
  
  constructor (
    mongooseModelName: string, readItemConstructor: (obj: any) => T) {
    /*Calls super to instantiate collection using mongoose connection*/
    this.validateMongooseModelName(mongooseModelName)
    
    // @ts-ignore
    this.mongooseModel = mongoose.model(mongooseModelName)
    this.writeItemConstructor = (obj: any) => {
      // @ts-ignore
      if (new this.mongooseModel(obj).validateSync() !== undefined) {
        throw new RepositoryItemException(obj)
      } else {
        return new this.mongooseModel(obj)
      }
    }
    this.readItemConstructor = readItemConstructor
  }
  
  /**Inserts a document in some database
   *@ return - db ID as a string*/
  protected async create (item: T): Promise<T> {
    return await this.readItemConstructor(
      this.mongooseModel.create(this.writeItemConstructor(item)))
  }
  
  /**Finds one db entity by id
   *@ return - a promise of the defined interface T, which is validated
   * with this.returnConstructor method.*/
  protected async findById (id: string): Promise<T> {
    return this.readItemConstructor(
      await this.mongooseModel.findById({ _id: id }))
  }
}