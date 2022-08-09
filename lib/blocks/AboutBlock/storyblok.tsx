import HomeAboutModule from './index'
import { storyblokEditable } from '@storyblok/react'

const HomeAboutModuleStoryblok: React.FC<{blok : any}> = ({blok}) => {
    return  <div {...storyblokEditable(blok)}>
        <HomeAboutModule
            module={{...blok}}
            designTitle={<span >{blok.designTitle}</span>}
            designContent={<span>{blok.designContent}</span>}
            developContent={<span>{blok.developContent}</span>}
            developTitle={<span>{blok.developTitle}</span>}
        />
    </div>
}

export default HomeAboutModuleStoryblok