import {
	Body,
	Controller,
	Get,
	HttpStatus,
	Param,
	Post,
	Query
} from '@nestjs/common'
import { MovieService } from './movie.service'
import {
	ApiBody,
	ApiNotFoundResponse,
	ApiOkResponse,
	ApiOperation,
	ApiParam,
	ApiQuery,
	ApiResponse
} from '@nestjs/swagger'
import { MovieDto } from './dto/movie.dto'

@Controller('movies')
export class MovieController {
	constructor(private readonly movieService: MovieService) {}

	@ApiOperation({
		summary: 'Get movie list',
		description: 'Return all movie list'
	})
	@ApiResponse({ status: HttpStatus.OK, description: 'Find movie!' })
	@Get()
	getAll() {
		return [
			{
				id: 1,
				title: 'Title'
			}
		]
	}

	@ApiOperation({
		summary: 'Get movie of ID',
		description: 'Return information a movie'
	})
	@ApiParam({ name: 'id', type: 'string', description: 'ID movie' })
	// @ApiHeader({ name: 'X-Auth-Token', description: 'Token is auth' })
	@ApiQuery({
		name: 'year',
		type: 'number',
		description: 'Filter for the year'
	})
	@ApiOkResponse({ description: 'Find movie!' })
	@ApiNotFoundResponse({
		description: 'Not Find movie!',
		example: {
			status: 404,
			message: 'Movie not found',
			timeStamp: '2025-02-18',
			path: '/movie/12334234'
		}
	})
	@Get(':id')
	getById(@Param('id') id: string, @Query('year') year: number) {
		return [
			{
				id: 1,
				title: 'Title'
			}
		]
	}

	@ApiOperation({ summary: 'Create movie' })
	@Post()
	create(@Body() dto: MovieDto) {
		return dto
	}
}
