import path from 'path';
import webpack from 'webpack';

import {buildWebpack} from './config/build/buildWebpack';
import {BuildPaths, BuildMode} from './config/build/types/types';

interface EnvVariables {
    mode: BuildMode,
    port: number,
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
    });

    return config;
};