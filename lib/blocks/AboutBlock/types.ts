import {ContentBlock} from '../types'

export interface AboutBlockProps extends ContentBlock{
  design_content: string;
  design_title: string;
  develop_content: string;
  develop_title: string;
}
