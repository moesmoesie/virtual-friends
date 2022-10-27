import {
  AboutMe,
  Contact,
  Footer,
  Header,
  LandingHome,
  SellingPoints,
  Solutions,
  Spacer,
  Article,
} from "ui/modules";

const Module: React.FC<{ data: any }> = (data: any) => {
  switch (data?._type) {
    case "about-me":
      return <AboutMe {...data} />;
    case "contact":
      return (
        <Contact
          {...data}
          buisnessCard={{
            address: "Van Nelleweg 1",
            postalcode: "3044 BC",
            country: "The Netherlands",
            telephone: "+31683600774",
            email: "mdarwesh@virtualfriends.dev",
            kvk: "86165321",
            btw: "NL291929092BO2",
            city: "Rotterdam",
          }}
        />
      );
    case "landing-home":
      return <LandingHome {...data} />;
    case "header":
      return <Header {...data} />;
    case "sellingPoints":
      return <SellingPoints {...data} />;
    case "solutions":
      return <Solutions {...data} />;
    case "spacer":
      return <Spacer {...data} />;
    case "footer":
      return <Footer {...data} />;
    case "article":
      return <Article {...data} />;
    default:
      break;
  }
};

export default Module;
