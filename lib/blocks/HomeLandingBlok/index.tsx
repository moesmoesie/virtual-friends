import { storyblokEditable } from "@storyblok/react";
import { Button, Container, StoryblokImage } from "../../components";
import FloatingContainer from "../../components/FloatingContainer";
import { Blok } from "../types";

const HomeLandingBlok: React.FC<{ blok: Blok }> = ({ blok }) => {
  return (
    <section className="relative" {...storyblokEditable(blok)}>
      <Container module={blok}>
        <Background images={blok?.landingImages ?? []} />
        <div className="flex items-center relative justify-between">
          <div className="max-w-2xl flex flex-col gap-10">
            <h1 className="display-1 ">{blok?.title}</h1>
            <p className="body-3 medium:max-w-[80%]">{blok.body}</p>
            <div className="flex gap-10 items-center">
              <a href="#contact">
                <div className="pointer-events-none">
                  <Button>{blok.callToAction}</Button>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/moesmoesie"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1318_706)">
                      <circle
                        cx="15"
                        cy="15"
                        r="13.5"
                        fill="#201D2A"
                        stroke="#201D2A"
                        strokeWidth="2"
                      />
                      <path
                        d="M4.25867 21.3969C5.78031 23.9461 8.18395 25.9079 11.0485 26.8616C11.6739 26.9759 11.9018 26.5899 11.9018 26.2584C11.9018 26.1212 11.8995 25.8787 11.8964 25.5542C11.8929 25.1783 11.8882 24.6925 11.8849 24.1328C8.408 24.8879 7.6744 22.4569 7.6744 22.4569C7.10578 21.0135 6.28624 20.629 6.28624 20.629C5.1513 19.8532 6.37218 19.8686 6.37218 19.8686C7.62683 19.9576 8.28676 21.157 8.28676 21.157C9.40174 23.0669 11.2127 22.5152 11.9248 22.196C12.0384 21.3879 12.3607 20.837 12.7183 20.5247C9.94273 20.2093 7.02444 19.1365 7.02444 14.3466C7.02444 12.9822 7.51172 11.8665 8.31132 10.9924C8.1824 10.6763 7.75344 9.40553 8.43333 7.68433C8.43333 7.68433 9.48308 7.34822 11.8711 8.96583C12.8679 8.68881 13.9376 8.54992 15.0004 8.54532C16.0617 8.54992 17.1314 8.68881 18.1298 8.96583C20.5163 7.34822 21.5637 7.68433 21.5637 7.68433C22.2459 9.40553 21.8169 10.6763 21.688 10.9924C22.4892 11.8665 22.9734 12.9822 22.9734 14.3466C22.9734 19.1488 20.0505 20.2054 17.2657 20.5147C17.7146 20.9007 18.1144 21.6634 18.1144 22.8298C18.1144 23.9471 18.1075 24.9201 18.103 25.5647C18.1007 25.884 18.0991 26.1227 18.0991 26.2584C18.0991 26.593 18.3239 26.982 18.9585 26.86C21.2405 26.0983 23.2297 24.6972 24.7129 22.869C22.4211 25.6943 18.9215 27.5 15.0001 27.5C10.4342 27.5 6.44011 25.052 4.25867 21.3969Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1318_706">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/mustafadarwesh/"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1318_709)">
                      <circle
                        cx="15"
                        cy="15"
                        r="13.5"
                        fill="#201D2A"
                        stroke="#201D2A"
                        strokeWidth="2"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.3282 8.59197C11.3282 9.45985 10.6674 10.1622 9.63398 10.1622C8.64083 10.1622 7.98001 9.45985 8.00046 8.59197C7.98001 7.68191 8.64081 7 9.65377 7C10.6674 7 11.3084 7.68191 11.3282 8.59197ZM8.08355 21.5118V11.4027H11.2253V21.5111H8.08355V21.5118Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.7435 14.6289C13.7435 13.3679 13.7019 12.293 13.6604 11.404H16.3893L16.5344 12.7889H16.5964C17.0099 12.1479 18.0433 11.1772 19.7177 11.1772C21.7845 11.1772 23.3349 12.5416 23.3349 15.5172V21.5131H20.1932V15.9109C20.1932 14.6078 19.7388 13.7194 18.6018 13.7194C17.7333 13.7194 17.2169 14.3189 17.0105 14.8973C16.9274 15.1043 16.8865 15.3932 16.8865 15.6834V21.5131H13.7448V14.6289H13.7435Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1318_709">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const Background: React.FC<{ images: any }> = (props) => {
  return (
    <>
      <div className="w-[500px]  h-[500px] -translate-y-12 right-0 absolute">
        {props.images.map((image: any, index: number) => {
          const p = Object.assign({}, image);
          Object.keys(p).forEach((key) => {
            if (
              p[key] === undefined ||
              !["top", "bottom", "right", "left", "translate"].includes(key)
            ) {
              delete p[key];
            }
          });
          return (
            <FloatingContainer delay={index * 0.2} key={index}>
              <StoryblokImage
                lazy={false}
                width={500}
                height={500}
                style={{
                  ...p,
                }}
                className="absolute w-[200px] opacity-40 large:opacity-100 blur-xl  large:blur-0 medium:w-[300px]"
                {...image.Image}
              />
            </FloatingContainer>
          );
        })}
      </div>
    </>
  );
};

export default HomeLandingBlok;
