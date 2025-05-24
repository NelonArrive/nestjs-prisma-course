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
	@IsNotEmpty()
	title: string

	@IsNotEmpty()
	@IsInt()
	@Min(1888)
	@Max(new Date().getFullYear())
	releaseYear: number

	@IsOptional()
	description?: string

	// @IsEnum(Genre)
	// genre: Genre

	@IsArray()
	@IsUUID('4', { each: true })
	actorsIds: string[]
}
