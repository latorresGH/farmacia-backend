import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class TurnosGateway {

  @WebSocketServer()
  server: Server;

  // 👇 cliente se une a su farmacia
  @SubscribeMessage('join_farmacia')
  handleJoin(
    @MessageBody() farmaciaId: number,
    @ConnectedSocket() client: Socket,
  ) {
    const room = `farmacia_${farmaciaId}`;
    client.join(room);

    console.log(`Cliente unido a ${room}`);
  }

  emitirTurnoLlamado(turno: any) {
    const room = `farmacia_${turno.farmaciaId}`;

    this.server.to(room).emit('turno_llamado', turno);
  }
}