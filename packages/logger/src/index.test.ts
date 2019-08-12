import { Debug } from './index'
const debug = new Debug('test')

describe('DEBUG', () => {
  it('should log', () => {
    debug.log('log')
  })

  it('should debug', () => {
    debug.debug('debug')
  })

  it('should info', () => {
    debug.info('info')
  })

  it('should error', () => {
    debug.error('error')
  })

  it('should warn', () => {
    debug.warn('warning')
  })

  it('should extend', () => {
    const exetendedDebug = debug.extend('extended')
  })
})
