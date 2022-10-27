import {
  ItemType,
  EmployeeType,
  ReviewType,
  OptionType,
} from "../../components";

export const products: ItemType[] = [
  {
    color: "#893AD8",
    id: "1",
    price: 99.95,
    title: "Virtual Boy 3000",
    discountPercentage: 20,
    image: {
      src: "https://cdn.sanity.io/images/kby5cprw/production/a167649e8700f1862251d874fc7ccf85448eca62-495x480.png?auto=format&w=500",
      width: "100",
    },
  },
  {
    color: "#ffffff",
    id: "2",
    price: 100,
    title: "Virtual Boy 2000",
    discountPercentage: 20,
    image: {
      src: "https://cdn.sanity.io/images/kby5cprw/production/a167649e8700f1862251d874fc7ccf85448eca62-495x480.png?auto=format&w=500",
      width: "100",
    },
  },
  {
    color: "#333333",
    id: "3",
    price: 99.95,
    title: "Virtual Boy 1000",
    discountPercentage: 20,
    image: {
      src: "https://cdn.sanity.io/images/kby5cprw/production/a167649e8700f1862251d874fc7ccf85448eca62-495x480.png?auto=format&w=500",
      width: "100",
    },
  },
  {
    color: "#E7B24B",
    id: "4",
    price: 90,
    title: "Virtual Boy 0000",
    discountPercentage: 20,
    image: {
      src: "https://cdn.sanity.io/images/kby5cprw/production/a167649e8700f1862251d874fc7ccf85448eca62-495x480.png?auto=format&w=500",
      width: "100",
    },
  },
];

export const employees: EmployeeType[] = [
  {
    company: "Company",
    name: "Name",
    phone: "+31634XXX366",
    github: "https://github.com/moesmoesie",
    linkedin: "https://www.linkedin.com/in/mustafadarwesh/",
    mail: "mdarwesh@virtualfriends.dev",
    image: {
      src: "https://cdn.sanity.io/images/kby5cprw/production/4395f182fa04851c14d7c54612ff4c5e15f28b80-663x849.png?auto=format&w=500",
      width: "80",
    },
  },
  {
    company: "Company",
    name: "Name",
    phone: "+31634XXX366",
    github: "https://github.com/moesmoesie",
    linkedin: "https://www.linkedin.com/in/mustafadarwesh/",
    mail: "mdarwesh@virtualfriends.dev",
    image: {
      src: "https://cdn.sanity.io/images/kby5cprw/production/10d2b9dec0aecef37669282c4dbef19f6d11e71c-663x849.png?auto=format&w=500",
      width: "80",
    },
  },
];

export const review: ReviewType = {
  company: "Caboosy Inc",
  name: "Jane Caboosy",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: {
    src: "https://cdn.sanity.io/images/kby5cprw/production/00719dd13aa9d16f6e716dac3d7e6a26dc4ddab6-3276x4096.jpg?auto=format&w=500",
    width: "100",
  },
};

export const colorOptions: OptionType[] = [
  { name: "Small", value: "small" },
  { name: "Medium", value: "medium" },
  { name: "Large", value: "large" },
];
