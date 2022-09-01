import { DetailedHTMLProps, ImgHTMLAttributes } from "react"

interface BaseImage {
    filename: string
    is_external_url: boolean
    lazy?: boolean
    [propName: string]: any;
}

interface Image1 extends BaseImage {
    width: number,
    height:number,
}

interface Image2 extends BaseImage {
    width: number,
    fill: true
}

export type StoryblokImageProps = Image1 | Image2





