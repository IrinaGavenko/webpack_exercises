import {ModuleOptions} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import {BuildOptions} from './types/types';

export function buildLoaders({mode}: BuildOptions): ModuleOptions['rules'] {
    const isDev = mode === 'development';

    const cssLoaderWithModules = {
        loader: 'css-loader',
        options: {
            modules: {
                // making readable styles classes names
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]',
            }
        }
    }

    const sccsLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            // style-loader -> MiniCssExtractPlugin.loader
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            // "css-loader" -> cssLoaderWithModules,
            cssLoaderWithModules,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    // order in array is important!
    return [
        sccsLoader,
        tsLoader,
    ]
}