export { default as PageBlock } from "./PageBlock";

import ContactStoryblok from "./ContactBlok";
import FooterBlok from "./FooterBlok";
import HowWeWorkBlok from "./HowWeWorkBlok";
import OffersBlok from "./OffersBlok";
import HeaderBlok from "./HeaderBlok";
import quoteBlok from "./QuoteBlok";
import SpacerBlok from "./SpacerBlok";
import UniqueSellingPointsBlok from "./UniqueSellingPointsBlok";
import HomeLandingBlok from "./HomeLandingBlok";

export const storyblokComponents = {
    spacer : SpacerBlok,
    quote: quoteBlok,
    howWeWork: HowWeWorkBlok,
    productOffering: OffersBlok,
    uniqueSellingPoints: UniqueSellingPointsBlok,
    contact: ContactStoryblok,
    header: HeaderBlok,
    footer: FooterBlok,
    homeLanding: HomeLandingBlok
}