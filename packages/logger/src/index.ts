/**
 * @author menosprezzi
 */

import debug from 'debug'
import { yellow, magenta, red, blue } from 'colors'
import * as git from 'git-rev-sync'
const version = `[${git.short()}]`

/**
 * Used to extend the `debug` package with some util methods.
 */
export class Debug {
  private readonly scope: string
  private readonly addToLog: debug.IDebugger

  /**
   * Create a `debug` scoped debug tool.
   */
  constructor(scope: string) {
    this.scope = scope
    this.addToLog = debug(`app:${this.scope}`)
  }

  extend(scope: string) {
    return new Debug(`${this.scope}:${scope}`)
  }

  /**
   * Display a default log.
   */
  log(...args: any[]) {
    const message = args.shift()
    this.addToLog(`${version}[LOG] ${message}`, ...args)
  }

  /**
   * Display a info message in blue.
   */
  info(...args: any[]) {
    const message = args.shift()
    this.addToLog(`${version} ${blue('[INFO]')} ${message}`, ...args)
  }

  /**
   * Display a error message in red.
   */
  error(...args: any[]) {
    const message = args.shift()
    this.addToLog(`${version} ${red('[ERROR]')} ${message}`, ...args)
  }

  /**
   * Display a debug message in magenta.
   */
  debug(...args: any[]) {
    const message = args.shift()
    this.addToLog(`${version} ${magenta('[DEBUG]')} ${message}`, ...args)
  }

  /**
   * Display a warn message in yellow.
   */
  warn(...args: any[]) {
    const message = args.shift()
    this.addToLog(`${version} ${yellow('[WARN]')} ${message}`, ...args)
  }
}
