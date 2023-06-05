// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import sessionCheck from './middlewares/sessionCheck';
// import { stackMiddlewares } from './middlewares/stack';

// export function middleware(request: NextRequest) {
//     if (request.nextUrl.pathname.startsWith('/about')) {
//         return stackMiddlewares([sessionCheck]);
//     }
// }
// export default middleware;
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/about')) {
        // This logic is only applied to /about
    }

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        // This logic is only applied to /dashboard
    }
}
