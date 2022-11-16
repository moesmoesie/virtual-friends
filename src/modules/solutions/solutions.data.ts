import { ItemType, EmployeeType, ReviewType, OptionType } from "../../components";

export const products: ItemType[] = [
  {
    color: "#893AD8",
    id: "1",
    price: 99.95,
    title: "Virtual Boy P",
    discountPercentage: 20,
    image: {
      src: "https://cdn.sanity.io/images/kby5cprw/production/a167649e8700f1862251d874fc7ccf85448eca62-495x480.png",
      width: 500,
      height: 0,
      alt: "Virtual Box P",
    },
  },
  {
    color: "#7F95E3",
    id: "2",
    price: 124.95,
    title: "Virtual Boy X",
    discountPercentage: 10,
    image: {
      src: "https://cdn.sanity.io/images/kby5cprw/production/def68604fa15d693b04c9deb52c14c947cc82c37-800x800.png",
      width: 500,
      height: 0,
      alt: "Virtual Box X",
    },
  },
];

export const employees: EmployeeType[] = [
  {
    company: "Virtual Friends",
    name: "John Doe",
    phone: "+31634XXX366",
    github: "https://github.com/moesmoesie",
    linkedin: "https://www.linkedin.com/in/mustafadarwesh/",
    mail: "mdarwesh@virtualfriends.dev",
    image: {
      src: "https://cdn.sanity.io/images/kby5cprw/production/4395f182fa04851c14d7c54612ff4c5e15f28b80-663x849.png",
      width: 500,
      height: 0,
      alt: "John Doe",
    },
  },
  {
    company: "Virtual Friends",
    name: "Jane Doe",
    phone: "+31634XXX366",
    github: "https://github.com/moesmoesie",
    linkedin: "https://www.linkedin.com/in/mustafadarwesh/",
    mail: "mdarwesh@virtualfriends.dev",
    image: {
      src: "https://cdn.sanity.io/images/kby5cprw/production/10d2b9dec0aecef37669282c4dbef19f6d11e71c-663x849.png?auto=format&w=500",
      width: 500,
      height: 0,
      alt: "Jane Doe",
    },
  },
];

export const review: ReviewType = {
  company: "Caboosy Inc",
  name: "Jane Caboosy",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: {
    src: "https://cdn.sanity.io/images/kby5cprw/production/00719dd13aa9d16f6e716dac3d7e6a26dc4ddab6-3276x4096.jpg",
    width: 100,
    height: 100,
    alt: "Jane Caboosy",
  },
};

export const colorOptions: OptionType[] = [
  { name: "Small", value: "small" },
  { name: "Medium", value: "medium" },
  { name: "Large", value: "large" },
];
