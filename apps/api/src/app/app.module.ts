import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import path, { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'web/.next'),
      exclude: ['/api/*']
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
