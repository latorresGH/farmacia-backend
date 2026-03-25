import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class TurnosGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  constructor(private jwtService: JwtService) {}

  async handleConnection(client: Socket) {
    try {
      const token = client.handshake.auth?.token;

      if (!token) {
        client.disconnect();
        return;
      }

      const payload = this.jwtService.verify(token);

      client.data.user = payload;

      client.join(`farmacia_${payload.farmaciaId}`);
    } catch (error) {
      client.disconnect();
    }
  }

  // 🔥 EVENTOS

  emitirTurnoCreado(turno: any) {
    this.server
      .to(`farmacia_${turno.farmaciaId}`)
      .emit('turno_creado', turno);
  }

  emitirTurnoLlamado(turno: any) {
    this.server
      .to(`farmacia_${turno.farmaciaId}`)
      .emit('turno_llamado', turno);
  }

  emitirTurnoFinalizado(turno: any) {
    this.server
      .to(`farmacia_${turno.farmaciaId}`)
      .emit('turno_finalizado', turno);
  }

  emitirTurnoCancelado(turno: any) {
    this.server
      .to(`farmacia_${turno.farmaciaId}`)
      .emit('turno_cancelado', turno);
  }
}