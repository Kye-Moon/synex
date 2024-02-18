import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import {jwtDecode} from "jwt-decode";

@Injectable()
export class AuthGuard implements CanActivate {
    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        const authToken = context.switchToHttp().getRequest().headers.authorization.split(' ')[1].trim() // Bearer token
        if (authToken === undefined) {
            throw new Error('Unauthorized');
        }
        let decoded: any;
        try {
            decoded = jwtDecode(authToken);
        } catch (e) {
            console.log(`e`, e)
            throw new Error('Unauthorized');
        }

        context.switchToHttp().getRequest().userId = decoded.sub;
        context.switchToHttp().getRequest().orgId = decoded.org_id;
        context.switchToHttp().getRequest().role = decoded.org_role;

        if (!decoded.sub) {
            throw new Error('Unauthorized');
        }
        return true
    }
}

