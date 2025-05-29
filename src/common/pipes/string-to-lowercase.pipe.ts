import {
	ArgumentMetadata,
	Injectable,
	type PipeTransform
} from '@nestjs/common'

@Injectable()
export class StringToLowercasePipe implements PipeTransform {
	transform(value: string, metadata: ArgumentMetadata) {
		if (typeof value === 'string') {
			return value.toLocaleLowerCase()
		}

		return value
	}
}
