import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image'; // Only if you're using Next.js

export default function Project() {
  return (
    <section className="project-container py-12 px-6">
      {/* Section Heading */}
      <h2 className=" text-slate-400 text-3xl font-bold text-left mb-8">Our Projects</h2>
      
      {/* Project Grid */}
      <div className="project-flex grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        
        
        {/* Image Items */}
        <div className="image-card">
          <Image 
            src="/sample.jpeg" 
            alt="Project Image 2"
            width={900} 
            height={300} 
            className="rounded shadow-md"
          />
          
        </div>
        <div className="image-card">
          <Image 
            src="/item2.png" // Replace with your image path
            alt="Project Image 3"
            width={950} 
            height={500} 
            className="rounded shadow-md"
          />
        </div>
        <div className="image-card">
          <Image 
            src="/item3.png" // Replace with your image path
            alt="Project Image 4"
            width={300} 
            height={200} 
            className="rounded shadow-md"
          />
        </div>
        <div className="image-card">
          <Image 
            src="/item4.png" // Replace with your image path
            alt="Project Image 5"
            width={300} 
            height={200} 
            className="rounded shadow-md"
          />
        </div>
        <div className="image-card">
          <Image 
            src="/item5.png" 
            alt="Project Image 2"
            width={300} 
            height={200} 
            className="rounded shadow-md"
          />
        </div>
      </div>
      
      {/* All Projects Button */}
      <div className="text-center">
        <button className="all-pro-btn bg-black text-white py-2 px-6 rounded hover:bg-gray-800 flex items-center justify-center">
          <a href="/project" className="flex items-center">
            All Projects <FaArrowRightLong className="ml-2" />
          </a>
        </button>
      </div>
    </section>
  );
}
