export interface BuildPaths {
    entry: string,
    output: string,
    html: string,
    src: string,
}

export type BuildMode = 'development' | 'production';

export interface BuildOptions {
    port: number,
    mode: BuildMode,
    paths: BuildPaths,
    analyzer?: boolean,
}