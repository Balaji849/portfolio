import logo1 from "./assets/logo1.jpeg"
import ff from "../src/assets/user1.jpg";
import WordRotate from "./components/ui/word-rotate";
import { BlurFade } from "../src/components/magicui/blur-fade";
import { Particles } from "./components/magicui/particles";
import { AuroraText } from "./components/magicui/aurora-text";
import { Dock, DockIcon } from "../src/components/ui/dock";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";



function App() {

       return (

    
    <>
    {/* Particles Background */}
    <div className="fixed inset-0 z-0">
        <Particles 
          className="w-full h-full" 
          quantity={200}         // Number of particles
          color="#FFFFFFFFF"       // Particle color
          speed={0.5}            // Particle speed
          radius={2}             // Particle radius
        />
      </div>
    <BlurFade>
    {/* section page */}
    <section className="bg-white h-28">
      <div className="text-black flex justify-between items-center h-full ">
        <div className="ml-5">
        <h1 className=" font-bold tracking-tighter md:text-xl lg:text-3xl">
          <AuroraText>BALAJI</AuroraText>
         
    </h1>
        
        </div>
        
      <div className="flex text-black gap-4 mr-10">
        <h1>
          ABOUT
        </h1>
       <h1>
        CONTACT
       </h1>
       <h1>
        EDUCATIONAL  CREDENTIALS
       </h1>
       <h1>
        SKILLS
       </h1>
       <h1>
        PROJECTS
       </h1>
      </div>
      </div>


    </section>
    
    

    {/* main page contents */}
    <section className="mt-28 mx-auto w-[900px] ">
      <div className="flex justify-between gap-20">
      
    <img src={ff} className="h-56 w-56  rounded-full object-cover " alt="Image not found" />
    <div> 

        
    <p className="text-lg  mt-3 font-roboto ">
    Mastering Front-End Development: Crafting Seamless User Experiences with Code.
   
    </p>
    <div className="flex gap-3 items-center text-4xl font-bold justify-center">
         
        <WordRotate
      className="text-5xl text-white dark:text-white font-bebas mt-4"
      words={["Hi, I'm Balaji", "Front-End Developer","Tech Enthusiast"]}
    />
       
      
        </div>
   
    </div>
    </div>
    </section>

      <section className="mt-20 mx-auto w-[900px]">
      <div className=" text-4xl font-bebas font-bold ">
        <h1>ABOUT</h1>
        </div>
        <div>
        <p className="text-lg font-normal mt-2 font-roboto">
        I’m a B.Tech(Information technology) student at Meenakshi College of Engineering, aspiring to become a professional coder. Passionate about problem-solving and innovation, I aim to create impactful solutions through technology. When I’m not coding, you’ll likely find me immersed in music or expressing my creativity through drawing
        </p>
      </div>
      </section>

      

      
      <section className="mt-20 mx-auto w-[900px]">
        
      <div className=" text-4xl font-bebas font-bold ">
       <h1>EDUCATIONAL CREDENTIALS</h1>
        </div>
        
      <div className="mt-8">
      <div className="flex justify-between">
        <div className="flex  gap-3">
          <img src={logo1} alt="" className="h-14 w-14 rounded-full" />
          <div>
            <h2 className="text-lg">
        <p className="text-lg font-normal  font-roboto">
        <a href="https://mce.edu.in/"> Meenaski College of Engineering </a>
        </p>
              
            </h2>
        <p className="text-sm font-normal  font-roboto text-gray-400">
          
              k.k.Nagar,virugambakkam
            </p>
          </div>
        </div>
        <div className="text-sm font-normal  font-roboto text-gray-400">
        Nov 2021-June 2025
        </div>
      </div>
      </div>
      
      </section>
      



      <section className="mt-20 mx-auto w-[900px]">
      <div className="text-4xl font-bebas font-bold">
        Skills
        </div>
        <div className="mt-3 flex gap-2 flex-wrap font-roboto ">
        <div className="w-22 h-8 px-3 bg-white text-black rounded-full justify-center items-center flex  ">
           Git&Github
          </div>
          <div className="w-16 h-8 px-3 bg-white text-black rounded-full justify-center items-center flex  ">
           Html
          </div>
          <div className="w-16 h-8 px-3 bg-white text-black rounded-full justify-center items-center flex  ">
           Css
          </div>
          <div className="w-22 h-8 px-3 bg-white text-black rounded-full justify-center items-center flex  ">
           Bootstrap
          </div>
          <div className="w-22 h-8 px-3 bg-white text-black rounded-full justify-center items-center flex  ">
           Tailwind
          </div>
          <div className="w-22 h-8 px-3 bg-white text-black rounded-full justify-center items-center flex  ">
           Javascript
          </div>
          <div className="w-22 h-8 px-3 bg-white text-black rounded-full justify-center items-center flex  ">
           React JS
          </div>
          <div className="w-22 h-8 px-3 bg-white text-black rounded-full justify-center items-center flex  ">
           Python 
          </div>
        </div>

      </section>

      <section className="mt-10 sticky flex items-end justify-center">
            <div className="  sticky top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 z-50">
            <Dock direction="middle " className="rounded-full blur-none ml-20 border-black border-2" >
              <DockIcon className='rounded-full w-14 '>
                <a href="https://www.instagram.com/">
                <LuInstagram  className=  "h-10 w-10 " / >
                </a>
              </DockIcon>
              <DockIcon>
              <a href="https://www.linkedin.com/in/balaji-m-06b1772a1/">
              <FaLinkedin className="h-10 w-10 " />
              </a>
              </DockIcon>
              <DockIcon>
                <a href="http://wa.me/918610407951">
                <FaSquareWhatsapp className="h-10 w-10 " />
                </a>
              </DockIcon>
              
      
             
            </Dock>
          </div>
          </section>
          

    


      
      </BlurFade>
    </>
   
  )
}

export default App;