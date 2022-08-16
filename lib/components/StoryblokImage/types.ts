import { DetailedHTMLProps, ImgHTMLAttributes } from "react"

export interface StoryblokImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    filename: string
}