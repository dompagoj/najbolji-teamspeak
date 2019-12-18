import { TeamSpeak } from 'ts3-nodejs-library'
import { config } from '../config'

export class TSServer {
  private static teamspeak: TeamSpeak

  public static async configure() {
    this.teamspeak = await TeamSpeak.connect({
      host: config.tsServerIp,
      username: config.tsUsername,
      password: config.tsPassword,
      queryport: 10011, //optional
      serverport: 9987,
      nickname: 'Choke me daddy'
    })
  }

  public static getInstance() {
    return this.teamspeak
  }
}

// await Promise.all([
//   teamspeak.registerEvent("server"),
//   teamspeak.registerEvent("channel", 0),
//   teamspeak.registerEvent("textserver"),
//   teamspeak.registerEvent("textchannel", 0),
// ])

// teamspeak.on('textmessage', ev => {
//   console.log('Text message!')
//   console.log(ev)
// })

// teamspeak.on('channeledit', ev => {
//   console.log('Channel edited')
// })

// teamspeak.on('clientconnect', ev => {
//   console.log('Client connected!')
//   console.log(ev)
// })

// teamspeak.on('clientmoved', ev => {
//   console.log('Client moved!')
// })

// console.log('Started...')
// }
