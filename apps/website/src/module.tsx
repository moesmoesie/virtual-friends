import {
  AboutMe,
  Contact,
  Footer,
  Header,
  LandingHome,
  SellingPoints,
  Solutions,
  Spacer,
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
            postalcode: "3044 BC Rotterdam",
            country: "The Netherlands",
            telephone: "+3123456789",
            email: "name@example.dev",
            kvk: "0123456789",
            btw: "0123456789",
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
    default:
      break;
  }
};

export default Module;