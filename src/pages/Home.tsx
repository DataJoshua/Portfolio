import FrameContainer from "../containers/FrameContainer";
import astronautImg from "../assets/astronaut.png";
import Button from "../atoms/Button";
import Footer from "../templates/Footer";

const Home = ()=> {
  return (<>
    <FrameContainer>
      <div className="flex justify-center items-center">
        <div className="text-end lg:text-start max-w-xs lg:max-w-lg flex-col flex gap-3 lg:items-start items-end">
          <h1 className="text-3xl lg:text-6xl">Web Development without barreers</h1>
          <div className="flex items-center justify-end lg:justify-start">
            <Button label="Hire Us" handleOnClick={()=>{}}/>          
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </div>
        </div>
        <div className="w-[350px] lg:w-[500px]">
          <img src={astronautImg} alt="" />
        </div>
      </div>
      <Footer/>
    </FrameContainer>
  </>)
};

export default Home;