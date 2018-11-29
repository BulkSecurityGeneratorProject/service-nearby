import { IUser } from 'app/core/user/user.model';

export interface IService {
    id?: number;
    serviceName?: string;
    cost?: number;
    test?: string;
    users?: IUser[];
}

export class Service implements IService {
    constructor(public id?: number, public serviceName?: string, public cost?: number, public test?: string, public users?: IUser[]) {}
}
