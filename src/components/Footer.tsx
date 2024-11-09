
import Image from 'next/image'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
    <footer className="bg-black py-9 px-10 text-white flex flex-col items-center">
        {/* Main Footer Content */}
        <div className="container mx-auto flex justify-between items-start">
            <div className="flex-1">
                <Image 
                    src="/footerlogo.png" 
                    alt="logo" 
                    width={145} 
                    height={94} 
                />
            </div>

            <div className="flex-1 font-Roboto leading-6 tracking-wide font-medium mb-4">
                <h3 className="text-xl mb-4">Information</h3>
                <p className="mb-4">Main</p>
                <p className="mb-4">Gallery</p>
                <p className="mb-4">Projects</p>
                <p className="mb-4">Certifications</p>
                <p className="mb-4">Contacts</p>
            </div>

            <div className="flex-1 font-Roboto leading-6 tracking-wide font-medium mb-4">
                <h3 className="text-xl mb-4">Contacts</h3>
                <p className="mb-4 flex items-center"><IoLocationOutline className="mr-3" /> 1234 Sample Street Austin Texas 78704</p>
                <p className="mb-4 flex items-center"><MdOutlineLocalPhone className="mr-3" /> 512.333.2222</p>
                <p className="mb-4 flex items-center"><MdOutlineMail className="mr-3" /> sampleemail@gmail.com</p>
            </div>

            <div className="flex-1 font-Roboto leading-6 tracking-wide font-medium mb-4">
                <h3 className="text-xl mb-4">Social Media</h3>
                <div className="flex items-center gap-x-4 text-2xl">
                    <FaFacebookF /> <FaTwitter /> <FaLinkedin /> <FaPinterestP />
                </div>
            </div>
        </div>

        {/* Separator and Copyright */}
        <div className="container mx-auto mt-8 text-center">
            <hr className="w-full border-gray-300 mb-4" />
            <p className="footer-label">&copy; 2021 All Rights Reserved</p>
        </div>
    </footer>
</div>




)
}

export default Footer