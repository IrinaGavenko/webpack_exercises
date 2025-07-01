import path from 'path';
import webpack from 'webpack';

import packageJson from "./package.json";

import {
    BuildPaths,
    BuildMode,
    BuildPlatform,
    BuildOptions,
    buildWebpack,
} from '@packages/build-config/src';

interface EnvVariables {
    mode: BuildMode,
    port: number,
    analyzer?: boolean,
    platform?: BuildPlatform,
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src'),
    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3002,
        mode: env.mode ?? 'development',
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop',
        paths,
    });

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'admin',
        filename: 'remoteEntry.js',
        exposes: {
            './Router': './src/router/Router',
        },
        shared: {
            ...packageJson.dependencies,
            react: {
                eager: true,
            },
            'react-router-dom': {
                eager: true,
            },
            'react-dom': {
                eager: true,
            }
        }
    }))

    return config;
};