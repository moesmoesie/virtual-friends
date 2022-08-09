import Spacer from './index'
import { storyblokEditable } from '@storyblok/react'

const SpacerStoryblok: React.FC<{blok : any}> = ({blok}) => {
    return  <div {...storyblokEditable(blok)}>
        <Spacer
        backgroundColor={blok.backgroundColor}
        height = {blok.height}
        />
    </div>
}

export default SpacerStoryblok