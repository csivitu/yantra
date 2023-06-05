import { NextMiddleware } from 'next/server';
export type MiddlewareHandler = (middleware: NextMiddleware) => NextMiddleware;
