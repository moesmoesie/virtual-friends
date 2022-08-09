import { storyblokEditable } from "@storyblok/react"
import HeaderBlock from "."

const HeaderStoryblok : React.FC<{blok : any}> = ({blok}) => {
    return <div {...storyblokEditable(blok)}>
        <HeaderBlock/>
    </div>
}

export default HeaderStoryblok