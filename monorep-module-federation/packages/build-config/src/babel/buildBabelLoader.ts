import {BuildOptions} from '../types/types';
import {removeDataTestIdBabelPlugin} from "./removeDataTestIdBabelPlugin";

export function buildBabelLoader(options: BuildOptions) {
    const {mode} = options;
    const isProd = mode === 'production';

    const plugins = [];

    if (isProd) {
        plugins.push([
            removeDataTestIdBabelPlugin,
            {
                props: ['data-testId']
            }
        ]);
    }

    return {
        test: /\.tsx?$/,
        // test: /\.m?js$/, -- not working with ts
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                // possible move it to babel.config.json
                presets: [
                    // standart
                    '@babel/preset-env',
                    // for ts
                    '@babel/preset-typescript',
                    // for react
                    ['@babel/preset-react', {
                        runtime: 'automatic',
                    }],
                ],
                plugins,
            }
        }
    }
}