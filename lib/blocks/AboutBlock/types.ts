import {ContentBlock} from '../types'

export interface AboutBlockProps extends ContentBlock{
  designContent: string | JSX.Element;
  designTitle: string | JSX.Element;
  developContent: string | JSX.Element;
  developTitle: string | JSX.Element;
}
