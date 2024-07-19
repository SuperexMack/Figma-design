import "./Navbar.css"
import imageo from "./K.jpg"
import Heading from "../MainHead/Head"
function Navbar(){
    return(
        <>
        <div className="bg-black h-[100px] w-full flex flex-row justify-center items-center cursor-pointer navbar-glow">
           
        <img src={imageo} className="h-[100px] w-[100px] absolute left-[200px] rounded-[100%]"></img>


        
        <div className="flex flex-row justify-center items-center gap-7 list-none lists text-white h-[100px]">
          
          <li>About</li>
          <li>Services</li>
          <li>Process</li>
          <li>Work</li>
          <li>Pricing</li>
          <li>FAQs</li>
        </div>

        <div className="flex justify-center items-center">
            <button className="btn liststwo border-2 border-blue-400 absolute right-[300px] p-3 rounded-xl text-white">Book a call</button>
        </div>

        </div>

        <Heading></Heading>
       

        </>
    )
}

export default Navbar