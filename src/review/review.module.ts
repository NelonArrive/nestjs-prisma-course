import { Module } from '@nestjs/common'
import { MovieService } from 'src/movie/movie.service'
import { ReviewController } from './review.controller'
import { ReviewService } from './review.service'

@Module({
	controllers: [ReviewController],
	providers: [ReviewService, MovieService]
})
export class ReviewModule {}
