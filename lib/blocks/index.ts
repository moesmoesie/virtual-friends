export { default as ContactBlock } from "./ContactBlok";
export { default as UnqiueSellingPointsBlock } from "./UniqueSellingPointsBlock";
export { default as HeaderBlock } from "./HeaderBlok";
export { default as PageBlock } from "./PageBlock";

import UniqueSellingPointsStoryblok from "./UniqueSellingPointsBlock/storyblok";

import ContactStoryblok from "./ContactBlok";
import FooterBlok from "./FooterBlok";
import HowWeWorkBlok from "./HowWeWorkBlok";
import OffersBlok from "./OffersBlok";
import HeaderBlok from "./HeaderBlok";
import AboutBlok from "./AboutBlok";
import SpacerBlok from "./SpacerBlok";



export const storyblokComponents = {
    spacer : SpacerBlok,
    aboutMe: AboutBlok,
    howWeWork: HowWeWorkBlok,
    productOffering: OffersBlok,
    uniqueSellingPoints: UniqueSellingPointsStoryblok,
    contact: ContactStoryblok,
    header: HeaderBlok,
    footer: FooterBlok
}