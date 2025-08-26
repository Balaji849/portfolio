import Aboutimg from "../assets/Img1.jpg";
import { SpinningText } from "@/components/magicui/spinning-text";


function About() {
  return (
  

    <div className="relative flex mt-10">
  
      <div className="w-[250px] rounded-xl overflow-hidden flex-shrink-0 relative z-10">
        <img
          src={Aboutimg}
          className="h-[250px] w-full object-cover"
          alt="Image not found.."
        />
        <SpinningText>Front end • Web Developer</SpinningText>
      </div>
      <div className="mt-5 pl-20 relative z-10">
        <h1 className="text-xl font-bold font-bebas">About Me</h1>
        <p className="font-bold">
          Dedicated Front end Developer based in Chennai, Tamil Nadu📍
        </p>
        <br />
        <h1 className="text-slate-300">
          Hello, I'm Balaji, a passionate Front-End Developer with a knack for
          creating engaging and user-friendly web experiences. My journey in web
          development has been driven by a love for technology and a commitment
          to continuous learning. I am also a team player who thrives in
          collaboration with cross-functional teams to produce outstanding web
          applications.
        </h1>
      </div>
    </div>

  );
}

export default About;
