import * as Express from 'express';

export interface IInvokableScope {
    request: Express.Request;
    response: Express.Response;
    next: Function;
    [service: string]: any;
}