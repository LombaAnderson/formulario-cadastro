import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { WebsocketService } from './websocket/websocket.service';

@Module({
  imports: [

    UsuarioModule
  
  ],
  controllers: [AppController],
  providers: [AppService, WebsocketService],
})
export class AppModule {}
