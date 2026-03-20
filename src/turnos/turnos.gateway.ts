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
      // 🔥 obtener token
      const token = client.handshake.auth?.token;

      if (!token) {
        client.disconnect();
        return;
      }

      // 🔐 verificar token
      const payload = this.jwtService.verify(token);

      // 👇 guardar user en socket
      client.data.user = payload;

      // 👇 unir a la sala de su farmacia
      client.join(`farmacia_${payload.farmaciaId}`);

      console.log('👤 Cliente en room:', `farmacia_${payload.farmaciaId}`);
    } catch (error) {
      console.log('❌ ERROR WS:', error.message);
      client.disconnect();
    }
  }

  // 🔥 emitir evento
  emitirTurnoLlamado(turno: any) {
    console.log('🔥 EMITIENDO A:', `farmacia_${turno.farmaciaId}`);
    this.server.to(`farmacia_${turno.farmaciaId}`).emit('turno_llamado', turno);
  }
}
