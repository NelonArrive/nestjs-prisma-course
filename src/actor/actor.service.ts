import { Injectable } from '@nestjs/common'

@Injectable()
export class ActorService {
	// constructor(
	// 	@InjectRepository(ActorEntity)
	// 	private readonly actorRepository: Repository<ActorEntity>
	// ) {}
	// async create(dto: ActorDto): Promise<ActorEntity> {
	// 	const { name } = dto
	// 	const actor = this.actorRepository.create({ name })
	// 	return await this.actorRepository.save(actor)
	// }
}
