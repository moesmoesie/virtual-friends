export interface ModuleType {
    module : {
        padding? : string;
        backgroundColor?: string;
        scrollMargin?: number;
    }
}

export type RichTextType = string | JSX.Element