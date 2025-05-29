import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException
} from '@nestjs/common'
import type { Request } from 'express'

@Injectable()
export class AuthGuard implements CanActivate {
	canActivate(context: ExecutionContext): boolean {
		const req = context.switchToHttp().getRequest<Request>()

		const authHeader = req.headers['authorization']

		if (!authHeader || !authHeader.startsWith('Bearer ')) {
			throw new UnauthorizedException(
				'Authorization token is missing or invalid'
			)
		}

		const token = authHeader.split(' ')[1]

		return true
	}
}
