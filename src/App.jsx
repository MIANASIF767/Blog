import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import './App.css'

function App() {
 const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center h-14 relative z-50 px-4 md:px-0 bg-white">
   
      <div>
        <img
          className="pl-0 md:pl-16 lg:pl-32 w-24 md:w-auto"
          src="/logo.png"
          alt="logo"
        />
      </div>

      
      <ul className="hidden md:flex gap-6 lg:gap-12 pr-0 md:pr-16 lg:pr-32 text-[rgb(105,130,85)] text-sm md:text-lg lg:text-xl font-[Open_Sans] cursor-pointer">
        <li>Home</li>
        <li>Categories</li>
        <li>Gallery</li>
        <li>About me</li>
        <li>Cooperation</li>
      </ul>

     
      <div className="md:hidden flex flex-col gap-1 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <span className="w-6 h-0.5 bg-[rgb(105,130,85)]"></span>
        <span className="w-6 h-0.5 bg-[rgb(105,130,85)]"></span>
        <span className="w-6 h-0.5 bg-[rgb(105,130,85)]"></span>
      </div>

     
      {isOpen && (
        <ul className="absolute top-14 left-0 w-full bg-white flex flex-col gap-4 p-4 text-[rgb(105,130,85)] text-lg font-[Open_Sans] md:hidden shadow-md">
          <li className="hover:bg-[rgb(230,230,230)] p-2 rounded">Home</li>
          <li className="hover:bg-[rgb(230,230,230)] p-2 rounded">Categories</li>
          <li className="hover:bg-[rgb(230,230,230)] p-2 rounded">Gallery</li>
          <li className="hover:bg-[rgb(230,230,230)] p-2 rounded">About me</li>
          <li className="hover:bg-[rgb(230,230,230)] p-2 rounded">Cooperation</li>
        </ul>
      )}
    </nav>

<section className='overflow-hidden h-[500px] md:h-[700px] lg:h-[850px] relative'>  
  <img className='w-full h-full object-cover z-0 relative md:-top-16 lg:-top-28' src="/Header_Home.webp" alt="" />

  <h1 className="absolute top-1/2 left-1/2 md:left-[70%] lg:left-[1000px] leading-tight md:leading-20 lg:leading-32 -tracking-tight
    font-[Open_Sans] w-40 md:w-52 -translate-x-1/2 -translate-y-1/2 text-[rgb(105,130,85)] text-3xl md:text-5xl lg:text-8xl text-center md:text-left">
    My Lifestyle Blog
  </h1>
</section>

<section className='flex flex-col md:flex-row col-span-2 p-6 md:p-16 lg:p-28 font-[Open_Sans] text-xl items-center'>
  
  <p className='w-full md:w-[400px] md:pl-6 lg:pl-14 md:ml-6 lg:ml-24 text-base leading-loose tracking-widest'>
    <h1 className='text-[rgb(105,130,85)] tracking-widest text-2xl font-bold h-11'>
      What is this blog about?
    </h1>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam dui ac nunc egestas interdum. Suspendisse dapibus luctus dolor quis dignissim. Proin ac auctor nibh. Mauris sed urna id elit dictum suscipit. Maecenas hendrerit mollis ligula vel lacinia. Donec tellus nisi, dignissim ut massa at, aliquet posuere augue. Phasellus dapibus libero purus, quis gravida nulla 
    <br /> 
    Morbi porttitor eros magna, convallis vehicula sapien gravida nec. Praesent facilisis elit varius metus fermentum euismod. Phasellus vulputate nunc mi, eget rutrum enim posuere vitae.
  </p>

  <div className="mt-8 md:mt-0 md:ml-10 lg:ml-80 h-[300px] md:h-[500px] w-full md:w-[405px] overflow-hidden">
    <img className="w-full h-full object-cover object-center" src="/Woman_2.webp" />
  </div>
</section>






<section className="text-center font-[Open_Sans] px-4">
  <h1 className="text-3xl md:text-4xl font-bold text-[rgb(105,130,85)] p-6">
    Categories
  </h1>

  <div className="flex justify-center gap-6 flex-wrap">
    <div className="w-full sm:w-[300px]">
      <div className="relative h-[300px] md:h-[350px] overflow-hidden group">
        <img src="/Main_travel.webp" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2 w-40 text-center bg-[rgb(105,130,85)] text-white py-2 rounded-md shadow-lg">
          TRAVELS
        </div>
      </div>
      <p className="mt-4 text-gray-600 leading-relaxed px-2">
        Ut at felis pulvinar, volutpat eros et, egestas purus. Integer id velit ac sem porttitor pulvinar. Cras varius quam ac tortor vehicula molestie.
      </p>
    </div>



<div className="w-full sm:w-[300px]">
      <div className="relative h-[300px] md:h-[350px] overflow-hidden group">
        <img src="/Main_Interiors.webp" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2 w-40 text-center bg-[rgb(105,130,85)] text-white py-2 rounded-md shadow-lg">
          INTERIORS
        </div>
      </div>
      <p className="mt-4 text-gray-600 leading-relaxed px-2">
        Ut at felis pulvinar, volutpat eros et, egestas purus. Integer id velit ac sem porttitor pulvinar. Cras varius quam ac tortor vehicula molestie.
      </p>
    </div>



    <div className="w-full sm:w-[300px]">
      <div className="relative h-[300px] md:h-[350px] overflow-hidden group">
        <img src="/Main_Personal-development.webp" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2 w-56 text-center text-2xl bg-[rgb(105,130,85)] text-white py-2 rounded-md shadow-lg">
        Personal Development
        </div>
      </div>
      <p className="mt-4 text-gray-600 leading-relaxed px-2">
        Ut at felis pulvinar, volutpat eros et, egestas purus. Integer id velit ac sem porttitor pulvinar. Cras varius quam ac tortor vehicula molestie.
      </p>
    </div>




    <div className="w-full sm:w-[300px]">
      <div className="relative h-[300px] md:h-[350px] overflow-hidden group">
        <img src="/Main_Healthy-food.webp" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2 w-40 text-center bg-[rgb(105,130,85)] text-white py-2 rounded-md shadow-lg">
          HEALTHY FOOD
        </div>
      </div>
      <p className="mt-4 text-gray-600 leading-relaxed px-2">
        Ut at felis pulvinar, volutpat eros et, egestas purus. Integer id velit ac sem porttitor pulvinar. Cras varius quam ac tortor vehicula molestie.
      </p>
    </div>

    
  </div>
</section>

<section className="max-w-6xl font-[Open_Sans] mx-auto px-4 sm:px-6 md:px-8 py-10">

  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[rgb(105,130,85)] py-8 md:p-16">
    New articles
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

    <div>
      <div className="h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden group relative">
        <img src="/Healthy-food_blog_3.webp" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500"></div>
      </div>

      <div className="mt-4 space-y-2">
        <h2 className="text-lg md:text-xl font-semibold">
          15 ways to start eating healthy
        </h2>
        <p className="text-xs md:text-sm text-gray-500">24 August 2022</p>
        <p className="text-gray-600 text-xs md:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet pulvinar sem. Nullam vel accumsan dui. Fusce quis odio a enim finibus feugiat non non nunc. Donec ornare quam ut urna porttitor, nec egestas dolor porta. Fusce auctor venenatis
        </p>
        <button className="text-green-600 text-sm md:text-base font-medium hover:underline">
          Read more →
        </button>
      </div>
    </div>

    <div>
      <div className="h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden group relative">
        <img src="/Healthy-food_blog_2.webp" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500"></div>
      </div>

      <div className="mt-4 space-y-2">
        <h2 className="text-lg md:text-xl font-semibold">
          Healthy and sweet substitutes
        </h2>
        <p className="text-xs md:text-sm text-gray-500">24 August 2022</p>
        <p className="text-gray-600 text-xs md:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet pulvinar sem. Nullam vel accumsan dui. Fusce quis odio a enim finibus feugiat non non nunc. Donec ornare quam ut urna porttitor, nec egestas dolor porta. Fusce auctor venenatis
        </p>
        <button className="text-green-600 text-sm md:text-base font-medium hover:underline">
          Read more →
        </button>
      </div>
    </div>

    <div>
      <div className="h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden group relative">
        <img src="/Healthy-food_blog_1.webp" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500"></div>
      </div>

      <div className="mt-4 space-y-2">
        <h2 className="text-lg md:text-xl font-semibold">
          A healthy lunch in 15 minutes
        </h2>
        <p className="text-xs md:text-sm text-gray-500">24 August 2022</p>
        <p className="text-gray-600 text-xs md:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet pulvinar sem. Nullam vel accumsan dui. Fusce quis odio a enim finibus feugiat non non nunc. Donec ornare quam ut urna porttitor, nec egestas dolor porta. Fusce auctor venenatis
        </p>
        <button className="text-green-600 text-sm md:text-base font-medium hover:underline">
          Read more →
        </button>
      </div>
    </div>

    <div>
      <div className="h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden group relative">
        <img src="/Travels_blog_4.webp" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500"></div>
      </div>

      <div className="mt-4 space-y-2">
        <h2 className="text-lg md:text-xl font-semibold">
          My trip to the Philippines
        </h2>
        <p className="text-xs md:text-sm text-gray-500">24 August 2022</p>
        <p className="text-gray-600 text-xs md:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet pulvinar sem. Nullam vel accumsan dui. Fusce quis odio a enim finibus feugiat non non nunc. Donec ornare quam ut urna porttitor, nec egestas dolor porta. Fusce auctor venenatis
        </p>
        <button className="text-green-600 text-sm md:text-base font-medium hover:underline">
          Read more →
        </button>
      </div>
    </div>

  </div>
</section>

<hr className="my-6" />

<section className="max-w-6xl mx-auto font-[Open_Sans] px-4 sm:px-6 md:px-8 py-10 md:py-16">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">

    
    <div>

      <div className="relative mb-12 md:mb-16">
        
        <img
          src="/Popular_1.webp"
          className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
        />

        <img
          src="/Popular_2.webp"
          className="w-[140px] sm:w-[170px] md:w-[200px] h-[140px] sm:h-[170px] md:h-[200px] object-cover absolute bottom-[-20px] md:bottom-[-40px] right-[-10px] md:right-[-40px] shadow-lg"
        />
      </div>

      <p className="text-gray-600 text-xs sm:text-sm leading-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non egestas ipsum, ac elementum tortor. Vestibulum eget finibus massa. Nullam porttitor id dui ultricies placerat. Nullam placerat quam at luctus viverra. Fusce ut erat erat. Praesent eros leo, ultrices quis dictum non, maximus eget felis. Donec maximus consequat lobortis. Sed in mollis est. Morbi dignissim iaculis risus non aliquam.
        <br /><br />
        Aliquam vel sollicitudin risus. Praesent est est, feugiat ut malesuada in, fermentum vel ante. Sed ac arcu at velit ornare cursus. Nullam eu dictum erat, id consectetur metus. Nullam tempor nisi quis ipsum semper volutpat a et tortor. In hac habitasse platea dictumst. Sed dapibus ultrices vestibulum.
      </p>

    </div>

    
    <div className='ml-0 md:ml-16'>

      <div className="bg-[rgb(105,130,85)] text-white text-center py-3 md:py-4 text-lg md:text-xl font-semibold mb-6 md:mb-8">
        POPULAR ARTICLES
      </div>

      <div className="flex gap-3 md:gap-4 mb-6">
        <img
          src="/Healthy-food_blog_3.webp"
          className="w-[90px] sm:w-[100px] md:w-[120px] h-[80px] sm:h-[90px] md:h-[100px] object-cover"
        />
        <div>
          <h2 className="text-base md:text-lg font-semibold">
            15 ways to start eating healthy
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet pulvinar sem. Nullam vel accumsan dui. Fusce quis odio
          </p>
        </div>
      </div>

      <hr className="my-4 md:my-6" />

      <div className="flex gap-3 md:gap-4">
        <img
          src="/Healthy-food_blog_2.webp"
          className="w-[90px] sm:w-[100px] md:w-[120px] h-[80px] sm:h-[90px] md:h-[100px] object-cover"
        />
        <div>
          <h2 className="text-base md:text-lg font-semibold">
            Healthy and sweet substitutes
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet pulvinar sem. Nullam vel accumsan dui. Fusce quis odio
          </p>
        </div>
      </div>

      <hr className="my-4 md:my-6" />

      <div className="flex gap-3 md:gap-4 mb-6">
        <img
          src="/Healthy-food_blog_1.webp"
          className="w-[90px] sm:w-[100px] md:w-[120px] h-[80px] sm:h-[90px] md:h-[100px] object-cover"
        />
        <div>
          <h2 className="text-base md:text-lg font-semibold">
            A healthy lunch in 15 minutes
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet pulvinar sem. Nullam vel accumsan dui. Fusce quis odio
          </p>
        </div>
      </div>

    </div>

  </div>

</section>

<section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16 font-[Open_Sans]">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-[rgb(105,130,85)] mb-4 md:mb-6">
        My philosophy
      </h1>

      <p className="text-gray-600 leading-6 md:leading-7 text-xs sm:text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum libero nec odio vulputate, sed finibus nisl lobortis. Morbi justo arcu, viverra venenatis maximus ut, sagittis in diam. Phasellus sollicitudin euismod auctor. Etiam ornare, felis et molestie maximus, ex dolor cursus eros, non gravida lorem turpis congue eros. Nam molestie odio leo, et lacinia augue varius at. Aliquam elementum lorem eu massa semper, ac volutpat lectus sagittis. Pellentesque faucibus massa ac elit mollis, et pretium ligula elementum. Nullam vel fringilla nisi, in tincidunt dui. Curabitur ac arcu ligula. Vestibulum sed dui euismod, dapibus ex ac, porta leo. Nulla a ipsum mattis, facilisis urna nec, rhoncus elit.
      </p>
    </div>

    <div className="relative ml-0 md:ml-12 mt-10 md:mt-0">
      
      <img
        src="/My-philosophy_1.webp"
        className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
      />

      <img
        src="/Woman_2.webp"
        className="w-[180px] sm:w-[220px] md:w-[260px] h-[180px] sm:h-[220px] md:h-[260px] object-cover absolute bottom-[-20px] md:bottom-[-40px] left-[-10px] md:left-[-60px] shadow-xl"
      />

    </div>

  </div>

</section>

<section className="py-16 md:py-20 bg-[#f5f5f5] flex flex-col items-center font-[Open_Sans] px-4">

  <h2 className="text-3xl md:text-5xl text-[rgb(105,130,85)] mb-10 md:mb-12">
    Subscribe
  </h2>

  <div className="w-full max-w-3xl">

    <div className="mb-6 md:mb-8">
      <label className="block text-[rgb(105,130,85)] mb-2 text-lg">
        Your e-mail:
      </label>
      <input type="email" placeholder="address@email.com" className="w-full border border-gray-300 p-3 md:p-4 outline-none bg-transparent" />
    </div>

    <div className="mb-6 md:mb-8">
      <label className="block text-[rgb(105,130,85)] mb-2 text-lg">
        Message:
      </label>
      <textarea rows="6" placeholder="Enter your message here" className="w-full border border-gray-300 p-3 md:p-4 outline-none bg-transparent resize-none"></textarea>
    </div>

    <button className="w-full bg-[rgb(105,130,85)] text-white py-3 md:py-4 tracking-wide">
      SEND
    </button>
  </div>

  <div className="mt-10 md:mt-16 flex flex-wrap justify-center gap-6 md:gap-10 text-[rgb(105,130,85)] text-base md:text-lg cursor-pointer ">
    <span className='hover:bg-[rgb(105,130,85)] hover:text-white px-2 '>Home</span>
    <span className='hover:bg-[rgb(105,130,85)] hover:text-white px-2'>About me</span>
    <span className='hover:bg-[rgb(105,130,85)] hover:text-white px-2'>Gallery</span>
    <span className='hover:bg-[rgb(105,130,85)] hover:text-white px-2'>Cooperation</span>
  </div>

 <div className="flex gap-6 md:gap-8 mt-8">

  <div className="w-10 md:w-12 h-10 md:h-12 border border-[rgb(105,130,85)] flex items-center justify-center text-[rgb(105,130,85)] hover:bg-[rgb(105,130,85)] hover:text-white transition duration-300 cursor-pointer">
    <FaFacebookF size={18} />
  </div>

  <div className="w-10 md:w-12 h-10 md:h-12 border border-[rgb(105,130,85)] flex items-center justify-center text-[rgb(105,130,85)] hover:bg-[rgb(105,130,85)] hover:text-white transition duration-300 cursor-pointer">
    <FaInstagram size={18} />
  </div>

  <div className="w-10 md:w-12 h-10 md:h-12 border border-[rgb(105,130,85)] flex items-center justify-center text-[rgb(105,130,85)] hover:bg-[rgb(105,130,85)] hover:text-white transition duration-300 cursor-pointer">
    <FaTwitter size={18} />
  </div>

</div>

</section>
    </>
  )
}

export default App
