import OffersBlock from "."
import { storyblokEditable } from "@storyblok/react"

const OffersStoryblok: React.FC<{blok: any}> = ({blok}) => {
    return <div {...storyblokEditable(blok)}>
        <OffersBlock
        module={{...blok}}
        title={blok.title}
        offers={blok.products.map((el : any) => {
            const keywords = el?.keywords.split(",") ?? []
            return {
                title: el.title,
                body: el.body,
                keywords: keywords.filter((value : any) => value !== ""),
                type: el.type
            }
        })}
        />
    </div>
}

export default OffersStoryblok