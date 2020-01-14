import { TeamSpeak } from 'ts3-nodejs-library'

import { config } from '../config'
import * as TeamspeakEventHandler from './teamspeak-event-handler'

export class TSServer {
  private static teamspeak: TeamSpeak

  public static async configure() {
    const teamspeak = await TeamSpeak.connect({
      host: config.tsServerIp,
      username: config.tsUsername,
      password: config.tsPassword,
      queryport: 10011, //optional
      serverport: 9987,
      nickname: 'Choke me daddy'
    })

    await Promise.all([teamspeak.registerEvent('server'), teamspeak.registerEvent('channel', 0)])

    teamspeak.on('clientconnect', TeamspeakEventHandler.handleConnect)

    teamspeak.on('clientmoved', TeamspeakEventHandler.handleMove)

    teamspeak.on('clientdisconnect', TeamspeakEventHandler.handleDisconnect)

    this.teamspeak = teamspeak
  }

  public static getInstance() {
    return this.teamspeak
  }
}
