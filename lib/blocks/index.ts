export { default as AboutBlock } from "./AboutBlock";
export { default as ContactBlock } from "./ContactBlock";
export { default as UnqiueSellingPointsBlock } from "./UniqueSellingPointsBlock";
export { default as HeaderBlock } from "./HeaderBlok";
export { default as PageBlock } from "./PageBlock";
export { default as SpacerBlock} from './SpacerBlock'

import SpacerStoryblok from "./SpacerBlock/storyblok";
import HomeAboutModuleStoryblok from "./AboutBlock/storyblok";
import UniqueSellingPointsStoryblok from "./UniqueSellingPointsBlock/storyblok";
import ContactStoryblok from "./ContactBlock/storyblok";

import FooterBlok from "./FooterBlok";
import HowWeWorkBlok from "./HowWeWorkBlok";
import OffersBlok from "./OffersBlok";
import HeaderBlok from "./HeaderBlok";

export const storyblokComponents = {
    spacer : SpacerStoryblok,
    aboutMe: HomeAboutModuleStoryblok,
    howWeWork: HowWeWorkBlok,
    productOffering: OffersBlok,
    uniqueSellingPoints: UniqueSellingPointsStoryblok,
    contact: ContactStoryblok,
    header: HeaderBlok,
    footer: FooterBlok
}