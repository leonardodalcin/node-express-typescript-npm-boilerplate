// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace NodeJS {
  export interface Global {
    __base_path: string
    __helpers_path: string
    __emails_path: string
    __config: object
    base_url: string
    __service: string
    __environment: string
    __root_path: string
    __routes_path: string
    __modules_path: string
    __services_path: string
    __controllers_path: string
    __tasks_path: string
    __templates_path: string
    __middlewares_path: string
    __caches_path: string
    __tickets_path: string
    __dictionaries_path: string
    __submodule_path: string
    __server_started: boolean
  }
}
