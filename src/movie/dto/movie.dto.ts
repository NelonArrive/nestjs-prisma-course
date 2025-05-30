import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
	IsArray,
	IsInt,
	IsNotEmpty,
	IsOptional,
	IsUUID,
	Max,
	Min
} from 'class-validator'

export class MovieDto {
	@ApiProperty({
		description: 'Name movie',
		example: 'Example',
		type: String
	})
	@IsNotEmpty()
	title: string

	@ApiProperty({
		description: 'Year release',
		example: 1999,
		type: Number
	})
	@IsNotEmpty()
	@IsInt()
	@Min(1888)
	@Max(new Date().getFullYear())
	releaseYear: number

	@ApiPropertyOptional({
		description: 'Link on poster movie',
		example: 'https://storage.exaple.com/poster/123456.jpg',
		type: String
	})
	@IsOptional()
	poster?: string

	@IsOptional()
	description?: string

	@ApiProperty({
		description: 'Id Actors',
		example: ['123456', '3242344'],
		type: [String]
	})
	@IsArray()
	@IsUUID('4', { each: true })
	actorsIds: string[]
}
