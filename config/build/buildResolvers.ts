import {Configuration} from 'webpack';
import {BuildOptions} from "./types/types";

export function buildResolvers(_: BuildOptions): Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}
