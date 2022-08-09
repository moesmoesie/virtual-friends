import { storyblokEditable } from "@storyblok/react"
import FooterBlok from "."

const FooterStoryblok : React.FC<{blok : any}> = ({blok}) => {
    return <div {...storyblokEditable(blok)}>
        <FooterBlok/>
    </div>
}

export default FooterStoryblok