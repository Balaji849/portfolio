      import { LuInstagram } from "react-icons/lu";
      import { FaLinkedin } from "react-icons/fa";
      import { FaSquareWhatsapp } from "react-icons/fa6";
      import { Dock, DockIcon } from "../src/components/ui/dock";

function Link() {
    return (
    <>
        <section className="sticky flex items-center justify-center  ">
                                <div className="flex justify-center">
                                <Dock direction="middle " className="rounded-full blur-none  border-black border-2" >
                                  <DockIcon >
                                    <a href="https://www.instagram.com/">
                                    <LuInstagram  className=  "h-10 w-10 " />
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

    )
};

export default Link;