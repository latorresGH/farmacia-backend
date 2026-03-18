import { Server, Socket } from 'socket.io';
export declare class TurnosGateway {
    server: Server;
    handleJoin(farmaciaId: number, client: Socket): void;
    emitirTurnoLlamado(turno: any): void;
}
