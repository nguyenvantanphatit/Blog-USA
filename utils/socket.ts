import { io, Socket } from 'socket.io-client'

let socket: Socket

export const initSocket = (token: string) => {
  socket = io(process.env.NEXT_PUBLIC_API_URL!, {
    auth: { token },
    autoConnect: false
  })

  return socket
}


export const getSocket = () => {
  if (!socket) {
    throw new Error('Socket not initialized. Call initSocket first.')
  }
  return socket
}


export const disconnectSocket = () => {
    if (socket) {
        socket.disconnect();
    }
}

