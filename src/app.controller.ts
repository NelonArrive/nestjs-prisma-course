import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common'

@Controller()
export class AppController {
	constructor() {}

	@Get()
	getHello() {
		return `Hello World!`
	}

	@UsePipes()
	@Post()
	create(@Body('title') title: string) {
		return `Movie: ${title}`
	}

	@Get('@me')
	getProfile() {
		return {
			id: 1,
			username: 'nelon',
			email: 'nelon.arrive@gmail.com'
		}
	}
}
