import { OnGatewayConnection, OnGatewayInit, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import { Socket } from 'net';
import { Server} from 'socket.io';

@WebSocketGateway()
export class WebsocketService implements OnGatewayConnection {
    @WebSocketServer()
    private server: Server

    handleConnection(client: Socket, ...args: any[]){
        console.log(client)
    }
}
