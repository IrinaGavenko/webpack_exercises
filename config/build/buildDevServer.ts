import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';

import {BuildOptions} from './types/types';

export function buildDevServer({port}: BuildOptions): DevServerConfiguration {
    return {
        // npm run start -- --env port=5000
        port: port ?? 3000,
        open: true,
        // for route using -- only for dev
        // if static works using nginx -- needed to use proxy to Index.html
        historyApiFallback: true,
        // update code without page refreshing
        // !!! not working for frameworks as React
        hot: true,
    }
}