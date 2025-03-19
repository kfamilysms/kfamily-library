/* eslint-disable no-shadow */

export type IWebSocketDataTransfer<T> = {
  connectionId?: string | null
  type?: IWebSocketChannelEnum
  data: T
}

export type IWebSocketDataTransferGeneralType = IWebSocketDataTransfer<
  IWebSocketClients | undefined
>

export enum IWebSocketChannelEnum {
  CONNECTION,
  LOGIN_CONNECTION,
  LOGOUT_CONNECTION,
  DISCONNECTION,
}

export type IWebSocketClients = {
  id?: string
  websocket?: WebSocket
}

export type IWebSocketConnectionLogin = {
  email: string
}
