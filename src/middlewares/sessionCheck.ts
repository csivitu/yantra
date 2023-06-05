import { NextFetchEvent, NextMiddleware, NextRequest } from 'next/server';
import { MiddlewareHandler } from './type';

const sessionCheck: MiddlewareHandler = (next: NextMiddleware) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        console.log('Log some data here', request.nextUrl.pathname);
        return next(request, _next);
    };
};

export default sessionCheck;
