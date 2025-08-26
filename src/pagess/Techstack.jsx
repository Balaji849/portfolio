import html1 from '../assets/html_i.png';
import css1 from '../assets/css_i.png';
import js1 from '../assets/js_i.png';
import react1 from '../assets/react_i.png';
import mysql1 from '../assets/mysql_i.png';
import git1 from '../assets/git_i.png';
import tailwind1 from '../assets/tailwind_i.png';


function Techstack(){
    return(
        <>
        <div className='flex'>
        
        <div className='h-10 w-[150px]  inline-flex items-center justify-center '>
            <h1 className="font-bold text-white  px-3 py-1 inline-block  border-r-[1px] border-white">
              Tech Stack
             </h1>

        </div>
        <div className='h-10 ml-10 flex gap-12 '>
         <img src={html1} alt="" />
         <img src={css1} alt="" />
         <img src={js1} alt=""  />
         <img src={react1} alt="" />
         <img src={tailwind1} alt="" />
         <img src={mysql1} alt="" />
         <img src={git1} alt="" />
        </div>




        </div>
            

        </>
    )
}
export default Techstack;