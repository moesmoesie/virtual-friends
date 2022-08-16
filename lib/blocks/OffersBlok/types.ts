export interface ProductSectionProps {
    title: string | JSX.Element
    body: string | JSX.Element
    keywords : string[]
    components : JSX.Element,
    reverse : boolean,
    image? : any
}