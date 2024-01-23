import {Injectable} from '@nestjs/common';
import {CreateCrewLogInput} from './dto/create-crew-log.input';
import {UpdateCrewLogInput} from './dto/update-crew-log.input';
import {CrewLogRepository} from "./crew-log.repository";
import {CrewLogImageRepository} from "../crew-log-image/crew-log-image.repository";
import {RequestService} from "../request/request.service";

@Injectable()
export class CrewLogService {
    constructor(
        private readonly crewLogRepository: CrewLogRepository,
        private readonly crewLogImageRepository: CrewLogImageRepository,
        private readonly request: RequestService,
    ) {
    }

    create(createCrewLogInput: CreateCrewLogInput) {
        return this.crewLogRepository.create({
            ...createCrewLogInput,
            userId: this.request.userId
        });
    }

    findAll() {
        return `This action returns all crewLog`;
    }

    findOne(id: number) {
        return `This action returns a #${id} crewLog`;
    }

    async update(id: string, updateCrewLogInput: UpdateCrewLogInput) {
        const {imageUrls, ...newLogInput} = updateCrewLogInput
        const newLog = await this.crewLogRepository.update(id, newLogInput);

        if (imageUrls.length > 0) {
             imageUrls.map(async (url) => {
                await this.crewLogImageRepository.create({
                    crewLogId: newLog.id,
                    url,
                })
                 console.log(`url saved`, url)
            })
        }
        return newLog
    }

    remove(id: number) {
        return `This action removes a #${id} crewLog`;
    }
}
