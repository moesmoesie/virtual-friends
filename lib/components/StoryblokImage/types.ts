import { DetailedHTMLProps, ImgHTMLAttributes } from "react"

export interface StoryblokImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    filename: string
    is_external_url: boolean
    size: number,
    lazy?: boolean 
}