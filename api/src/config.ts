import dotenv from 'dotenv'

dotenv.config()

export const config = {
  tsServerIp: process.env.TS_SERVER_IP,
  tsPassword: process.env.TS_PW,
  tsUsername: process.env.TS_USERNAME,
  env: {
    value: process.env.NODE_ENV,
    isDev() {
      return this.value === 'dev' || this.value === 'develop' || this.value === 'development'
    },
    isProd() {
      return this.value === 'production' || this.value === 'prod'
    }
  }
}