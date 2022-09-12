interface Image {
    filename: string
    is_external_url: boolean
    lazy?: boolean
    width: number
    height?: number
    [propName: string]: any;
}

export type StoryblokImageProps = Image