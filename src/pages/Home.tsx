import FrameContainer from "../containers/FrameContainer";
import astronautImg from "../assets/astronaut.png";
import Button from "../atoms/Button";
import Footer from "../templates/Footer";

const Home = ()=> {
  return (<>
    <FrameContainer>
      <div className="flex justify-center items-center">
        <div className="max-w-lg flex-col flex gap-3 items-start">
          <h1 className="text-6xl">Web Development without barreers</h1>
          <Button label="Hire Us" handleOnClick={()=>{}}/>
        </div>
        <div>
          <img src={astronautImg} alt="" />
        </div>
      </div>
      <Footer/>
    </FrameContainer>
  </>)
};

export default Home;