export interface MovieImages {
    logos: Array<Logo>;
    backdrops: Array<{
        file_path: string;
    }>;
}

export interface Logo {
    iso_639_1: string;
    file_path: string;
}