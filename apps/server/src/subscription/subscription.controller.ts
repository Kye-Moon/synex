import {Body, Controller, Get, Param, Patch, UseGuards} from '@nestjs/common';
import {SubscriptionService} from './subscription.service';
import {UpdateSubscriptionDto} from './dto/update-subscription.dto';
import {AuthGuard} from "../auth/auth.guard";

@Controller('subscription')
export class SubscriptionController {
    constructor(
        private readonly subscriptionService: SubscriptionService
    ) {
    }

    @UseGuards(AuthGuard)
    @Get(':externalProductId')
    findOne(@Param('externalProductId') externalProductId: string) {
        console.log('externalProductId', externalProductId);
        return this.subscriptionService.findOneByExternalProductId(externalProductId);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateSubscriptionDto: UpdateSubscriptionDto) {
        return this.subscriptionService.update(id, updateSubscriptionDto);
    }

}
