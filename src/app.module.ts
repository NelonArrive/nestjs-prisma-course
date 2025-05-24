import { Module } from '@nestjs/common'
import { MovieModule } from './movie/movie.module'
import { ConfigModule } from '@nestjs/config'
import { ReviewModule } from './review/review.module'
import { ActorModule } from './actor/actor.module'
import { PrismaModule } from './prisma/prisma.module'

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		PrismaModule,
		MovieModule,
		ReviewModule,
		ActorModule
	]
})
export class AppModule {}
