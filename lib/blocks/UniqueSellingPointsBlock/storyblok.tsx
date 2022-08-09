import UnqiueSellingPointsBlock from "./index"
import { storyblokEditable } from "@storyblok/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const UniqueSelleingPointsStoryblok  : React.FC<{blok : any}> = ({blok}) => {
    return <div {...storyblokEditable(blok)}>
        <UnqiueSellingPointsBlock
        module={{...blok}}
        title={blok.title}
        uniqueSellingPoints={blok.uniqueSellingPoints.map((el: any) => {
            return {
                title: el.title,
                body: el.body,
                icon: <FontAwesomeIcon className="text-teal-500" size="3x" icon='rocket'/>
            }
        })}
        />
    </div>
}

export default UniqueSelleingPointsStoryblok