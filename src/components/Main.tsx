import Image from 'next/image'; // Only if using Next.js

export default function Main() {
  return (
    <section className="main-container py-12 px-6">
      <div>
        <h2 className=" text-gray-400 main-heading text-3xl font-medium text-left mb-8">Main Focus/Mission Statement</h2>
        
        <div className="main-box grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Item */}
          <div className="flex items-start">
            <Image
              src="/1.png" // Replace with your image path
              alt="First Icon"
              width={50}
              height={50}
              className="mr-4"
            />
            <p className="main-p text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.
            </p>
          </div>
          
          {/* Second Item */}
          <div className="flex items-start">
            <Image
              src="/2.png" // Replace with your image path
              alt="Second Icon"
              width={50}
              height={50}
              className="mr-4"
            />
            <p className="main-p text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
