export { default as ContactBlock } from "./ContactBlok";
export { default as UnqiueSellingPointsBlock } from "./UniqueSellingPointsBlock";
export { default as HeaderBlock } from "./HeaderBlok";
export { default as PageBlock } from "./PageBlock";
export { default as SpacerBlock} from './SpacerBlock'

import SpacerStoryblok from "./SpacerBlock/storyblok";
import UniqueSellingPointsStoryblok from "./UniqueSellingPointsBlock/storyblok";

import ContactStoryblok from "./ContactBlok";
import FooterBlok from "./FooterBlok";
import HowWeWorkBlok from "./HowWeWorkBlok";
import OffersBlok from "./OffersBlok";
import HeaderBlok from "./HeaderBlok";
import AboutBlok from "./AboutBlok";


export const storyblokComponents = {
    spacer : SpacerStoryblok,
    aboutMe: AboutBlok,
    howWeWork: HowWeWorkBlok,
    productOffering: OffersBlok,
    uniqueSellingPoints: UniqueSellingPointsStoryblok,
    contact: ContactStoryblok,
    header: HeaderBlok,
    footer: FooterBlok
}