import { Dock, DockIcon } from "../src/components/ui/dock";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";



function Social(){
 return<>

 
       <section className=" sticky flex items-end justify-center">
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
 
 </>
}

export default Social ;