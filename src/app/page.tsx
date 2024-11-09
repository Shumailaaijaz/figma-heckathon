import Image from "next/image";
import Navbar from "@/components/Navbar";
import React from 'react';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Project from "@/components/project";
import Contact from "@/components/Contact";
import Main from "@/components/Main";


const page = () => {
  return (
    <main className="p-0 m-auto" width-1440px height-4052px radius-40 bg-gray-100>
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Main/>
      <Project/>
      <Contact/>
    </div>
    </main>
  )
}

export default page
