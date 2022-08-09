import { Container, CompanyCard, ContactForm, GradientText, Button } from "../../components";
import { ContactBlockProps } from "./types";
import { useScreen } from "../../hooks";

const GeneralContactModule: React.FC<ContactBlockProps> = (props) => {
  const screen = useScreen()
  return (

    <div className="bg-dark-purple-600 py-16 large:py-32">
      <Container>
       <h2 className="display-1"><GradientText>Get in touch</GradientText></h2>


        <div className="flex  flex-col-reverse large:flex-row gap-12 large:gap-20 mt-6 medium:mt-10">

        <div className="flex gap-12 -translate-y-6 py-12 items-center">
        <CompanyCard type={screen === 'medium' ? "horizontal" : 'verticle'}/>
       </div>

        <form className="flex flex-col medium:grid grid-cols-2 grid-rows-[repeat(3,min-content)] gap-x-6 gap-y-6 medium:gap-y-4 flex-1">
        <input className="w-full bg-transparent border-b p-4 border-b-dark-purple-200 placeholder-white body-2 focus-within:outline-none focus:border-b-teal-500" placeholder="Name" name="name" type='text'/>
        <input className="w-full bg-transparent border-b p-4 border-b-dark-purple-200 placeholder-white body-2 focus-within:outline-none focus:border-b-teal-500" placeholder="Email" name="email" type='email'/>
        <input className="w-full bg-transparent border-b p-4 border-b-dark-purple-200 placeholder-white body-2 focus-within:outline-none focus:border-b-teal-500" placeholder="What are you interested in?" name='catagory' type='text'/>
        <input className="w-full bg-transparent border-b p-4 border-b-dark-purple-200 placeholder-white body-2 focus-within:outline-none focus:border-b-teal-500" placeholder="What is your budget?" name = 'budget' type='text'/>
        <textarea className="w-full min-h-[128px] h-[128px] col-span-2 bg-transparent border-b p-4 border-b-dark-purple-200 placeholder-white body-2 focus-within:outline-none focus:border-b-teal-500" placeholder="Message"/>
        <div className="mt-5">
        <Button type="accent">Send</Button>
        </div>
       </form>

   
       </div>
      </Container>
    </div>
  );
};

export default GeneralContactModule;
