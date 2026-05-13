import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class TurnosGateway implements OnGatewayConnection {
  @WebSocketServer()
  server!: Server;

  constructor(private jwtService: JwtService) {}

  async handleConnection(client: Socket) {
    try {
      const token = client.handshake.auth?.token;

      if (!token) {
        client.join('pantalla');
        console.log('📺 PANTALLA CONNECT:', client.id);
        return;
      }

      const payload = this.jwtService.verify(token);
      client.data.user = payload;
      client.join('turnos');
      console.log('🟢 CONNECT:', client.id);
    } catch (error) {
      client.disconnect();
    }
  }

  emitirTurnoCreado(turno: any) {
    this.server.emit('turno_creado', turno);
  }

  emitirTurnoLlamado(turno: any) {
    this.server.emit('turno_llamado', turno);
  }

  emitirTurnoDerivado(turno: any) {
    this.server.to('turnos').emit('turno_derivado', turno);
  }

  emitirTurnoEnAtencion(turno: any) {
    this.server.emit('turno_en_atencion', turno);
  }

  emitirTurnoFinalizado(turno: any) {
    this.server.emit('turno_finalizado', turno);
  }

  emitirTurnoCancelado(turno: any) {
    this.server.emit('turno_cancelado', turno);
  }
}