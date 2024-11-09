import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image'; // Only if using Next.js

export default function About() {
  return (
    <section className=" bg-slate-100 mt-9 about-container flex flex-col  col col-span-1 md:flex-row items-center py-12 px-6">
      {/* Left Side: Images */}
      <div className="left-about flex flex-col space-y-4 mb-8 md:mb-0 md:mr-8">
        
        <div className="box1">
          <Image 
            src="/pic2.png" 
            alt="Image 1"
            width={520} 
            height={600} 
            className="rounded-md"
          />
        </div>
        <div className="box2">
          <Image 
            src="/pic3.png" // Replace with your image path
            alt="Image 2"
            width={520} // Adjust width as needed
            height={720} // Adjust height as needed
            className="rounded-md"
          />

        </div>
        
      </div>

      {/* Right Side: Text and Button */}
      <div className="right-about mt-5 col-span-2">
      <div className="box3">
          <Image 
            src="/pic4.png" 
            alt="Image 3"
            width={420} 
            height={320} 
            className="rounded-md"
          />
        </div>
     <div/> 
     <br />  
     <div>
        <div className="right-about  col-end-3 md:text-left max-w-md"></div>
        <h1 className=" text-gray-400 text-3xl font-medium mb-4">About</h1>
        <p className="text-gray-700 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <button className="about-button bg-black text-white py-2 px-6 rounded hover:bg-gray-800 inline-flex items-center">
          <a href="#" className="flex items-center">
            READ MORE <FaArrowRightLong className="ml-2" />
          </a>
        </button>
      </div>
      </div>
    </section>
  );
}
