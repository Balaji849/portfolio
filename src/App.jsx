        import logo1 from "./assets/logo1.jpeg"
        import ff from "../src/assets/user1.jpg";
        import WordRotate from "./components/ui/word-rotate";
        import { BlurFade } from "../src/components/magicui/blur-fade";
        import { Particles } from "./components/magicui/particles";
        import { AuroraText } from "./components/magicui/aurora-text";
        import Link from "./link";
        import About from "./pagess/About";
        import Techstack from "./pagess/Techstack";
        import { ScrollProgress } from "./components/magicui/scroll-progress";


        function App() {

              return (

            
            <>
            <ScrollProgress className='h-[2px]' />
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
          
            <section className=" text-slate-500 flex justify-between items-center h-20 ">
                <div className="ml-5">
                <h1 className=" font-bold tracking-tighter md:text-xl lg:text-3xl">
                  <AuroraText>Balaji.dev</AuroraText>  
                </h1>
              </div>
            <nav className="font-roboto font-bold text-lg flex gap-10 p-5 justify-center items-center">
    <ul className="flex gap-10">
      <li><a href="">[HOME]</a></li>
      <li><a href="#about">[ABOUT]</a></li>
      <li><a href="#education">[Education]</a></li>
      <li>[CONTACT]</li>
      <li>[PROJECTS]</li>
    </ul>
  </nav>

            </section>
            
            
            

            {/* main page contents */}
            <section className="mt-12 mx-auto w-[900px]  ">
            <div className="flex justify-between items-center gap-7 h-[500px]">
              
            <img src={ff} className="h-56 w-56  rounded-full object-cover " alt="Image not found" />
            <div> 
          
            <p className="text-lg  mt-3 font-roboto  ">
            Mastering Web-Development: Crafting Seamless User Experiences with Code.
          
            </p>
            <div className="flex gap-3 items-center text-4xl font-bold justify-center">
                
                <WordRotate
              className="text-5xl text-white dark:text-white font-bebas mt-4"
              words={["Hi👋, I'm Balaji", "Front-End Developer","Tech Enthusiast"]}
            />
                </div>
                <Link/>  
            </div>
            
            </div>
            <div className="h-[300px]">
        <Techstack/> 
            </div>

            
            </section>
            <div className="w-[900px] mx-auto mt-10 h-[500px] scroll-mt-36" id="about">
                  
                           <About/>
                        
                        
              </div>
             



              

              

              
              <section className="mt-24 mx-auto w-[900px]  mb-80" id="education">
                
              <div className=" text-4xl font-bebas font-bold text-center" >
              <h1 >EDUCATIONAL CREDENTIALS</h1>
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
            
                
              <section className="mt-20 mx-auto w-[900px] scroll-mt-24"id="">
                 <div className="text-4xl font-bebas font-bold text-center mb-10">
                 <h1>LIVE PROJECTS</h1>
                 </div>
                </section>
              

              
              
            </BlurFade>

            </>
          
          )
        }

        export default App;