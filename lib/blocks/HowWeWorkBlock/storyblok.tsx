import HowWeWorkBlock from "."
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { storyblokEditable } from "@storyblok/react"

const HowWeWorkStoryblok : React.FC<{blok : any}>= ({blok}) => {
    return <div {...storyblokEditable(blok)}>
    <HowWeWorkBlock
        module={{...blok}}
        body={<span>{blok.body}</span>}
        steps={blok.steps.map((el : any) => {
            return {
                title: el.title,
                body: el.body,
                icon: <FontAwesomeIcon size="3x" icon='plus'/>
            }
        })}
        title={blok.title}
    />
        </div>

}

export default HowWeWorkStoryblok