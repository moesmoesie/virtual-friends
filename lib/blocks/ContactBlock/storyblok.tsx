import { storyblokEditable } from "@storyblok/react";
import { ContactBlock } from "..";

const ContactStoryblok : React.FC<{blok : any}> = ({blok}) => {
    return <div {...storyblokEditable(blok)}>
        <ContactBlock
            title={blok.title}
            module={{...blok}}
        />
    </div>
}

export default ContactStoryblok