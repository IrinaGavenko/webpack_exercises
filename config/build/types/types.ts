export interface BuildPaths {
    entry: string,
    output: string,
    html: string,
    src: string,
}

export type BuildMode = 'development' | 'production';
export type BuildPlatform = 'mobile' | 'desktop';

export interface BuildOptions {
    port: number,
    mode: BuildMode,
    paths: BuildPaths,
    analyzer?: boolean,
    platform?: BuildPlatform,
}