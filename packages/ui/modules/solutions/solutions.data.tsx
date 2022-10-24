import { ItemType, EmployeeType, ReviewType } from "../../components";

export const products: ItemType[] = [
  {
    color: "#893AD8",
    id: "1",
    price: 99.95,
    title: "Virtual Boy 3000",
    discountPercentage: 20,
    image: {
      src: "/images/virtualboy3000.png",
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
      src: "/images/virtualboy3000.png",
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
      src: "/images/virtualboy3000.png",
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
      src: "/images/virtualboy3000.png",
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
      src: "/images/employee1.png",
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
      src: "/images/employee2.png",
      width: "80",
    },
  },
];

export const review: ReviewType = {
  company: "Caboosy Inc",
  name: "Jane Caboosy",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: {
    src: "/images/reviewer.jpg",
    width: "100",
  },
};
