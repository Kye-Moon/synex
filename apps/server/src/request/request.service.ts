import {Inject} from '@nestjs/common';
import {REQUEST} from '@nestjs/core';

export class RequestService {
    constructor(@Inject(REQUEST) private request: any) {
    }

    get userId(): any {
        return this.request.userId;
    }

    get organisationId(): any {
        return this.request.orgId;
    }

    get role(): any {
        return this.request.role;
    }
}
