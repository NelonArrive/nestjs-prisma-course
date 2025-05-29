import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { logger } from './common/middlewares/logger.middleware'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.enableCors()
	app.setGlobalPrefix('api')
	app.use(logger)
	app.useGlobalPipes(new ValidationPipe())

	await app.listen(4200)
}
bootstrap()