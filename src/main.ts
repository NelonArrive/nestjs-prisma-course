import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { logger } from './common/middlewares/logger.middleware'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.enableCors()
	app.setGlobalPrefix('api')
	app.useGlobalPipes(new ValidationPipe())

	const config = new DocumentBuilder()
		.setTitle('Nest Course API')
		.setDescription('API documentation fot Nest course')
		.setVersion('1.0.0')
		.setContact('Nelon Arrive', 'https://tlelegramm.com', 'nelon@arrive.com')
		.build()

	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('/docs', app, document)

	app.use(logger)

	await app.listen(4200)
}
bootstrap()

// 4:54:00
