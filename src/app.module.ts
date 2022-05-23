import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CocktailsController } from './cocktails/cocktails.controller';

@Module({
  imports: [],
  controllers: [AppController, CocktailsController],
  providers: [AppService],
})
export class AppModule {}
