import { ClientDisconnect, ClientMoved, ClientConnect } from 'ts3-nodejs-library/lib/types/Events'

export function handleDisconnect(ev: ClientDisconnect) {
  console.log('Client disconnected! ', ev)
}

export function handleMove(ev: ClientMoved) {
  console.log('Client moved!', ev)
}

export function handleConnect(ev: ClientConnect) {
  console.log('Client connected!', ev)
}
