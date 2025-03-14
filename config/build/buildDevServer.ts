import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';

import {BuildOptions} from './types/types';

export function buildDevServer({port}: BuildOptions): DevServerConfiguration {
    return {
        // npm run start -- --env port=5000
        port: port ?? 3000,
        open: true,
    }
}