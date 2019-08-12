import { BaseRepository } from '@repositories/base'
import { PasswordResetToken } from '@business-models/password-reset-token'

import { Debug } from '@helpers/debug'
const debug = new Debug('PasswordResetTokenRepository')

/** now, we have all code implementation from BaseRepository */
export class PasswordResetTokenRepository extends BaseRepository<PasswordResetToken> {
  constructor() {
    /** this repository item constructor function */
    super('PasswordResetToken', (obj:any) => {
      return new PasswordResetToken(obj)
    })
  }
  
  /** Inserts one document or throw in case of error */
  async create(item: PasswordResetToken): Promise<PasswordResetToken> {
    return super.create(item)
  }
  
  /** find an object in the db, returns and throws in case it is not there*/
  async findById(id: string): Promise<PasswordResetToken> {
    return await super.findById(id)
  }
}