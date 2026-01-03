import React from 'react'
import logo from './assets/TourismBangladesh.png'
import coxImg from './assets/coxbazar.png'
import sylhetImg from './assets/sylhet.png'
import sundarbanImg from './assets/sundarban.png'
import sajekImg from './assets/sajek.png'
import bandarbanImg from './assets/bandarban.png'
import rangamatiImg from './assets/rangamati.png'
import saintMartinImg from './assets/saintmartin.png'
import sunamganjImg from './assets/sunamganj.png'
import kuakataImg from './assets/kuakata.png'
import './App.css'


function App() {


  return (
    <>
    {/* Navbar Start */}
    <nav className='max-w-[1700px] mx-auto flex justify-between items-center p-5'>
 <div className=''>
        <img className='h-50 w-50' src={logo} alt="Tourism Bangladesh" />
      </div>
      <div>
        <ul className='flex justify-center gap-10 text-xl font-serif p-20'>
          <li className='hover:text-blue-600 cursor-pointer'>Home</li>
          <li className='hover:text-blue-600 cursor-pointer'>Destinations</li>
          <li className='hover:text-blue-600 cursor-pointer'>Hotels</li>
          <li className='hover:text-blue-600 cursor-pointer'>Bookings</li>
          <li className='hover:text-blue-600 cursor-pointer'>Contact</li>
        </ul>
      </div>
    </nav>
    {/* Navbar End */}
     <header>
      <div className='text-center mt-20'>
        <h1 className='text-5xl font-bold mb-4'>Explore the Beauty of Bangladesh</h1>
        <p className='text-xl mb-8'>Discover breathtaking destinations, rich culture, and unforgettable experiences.</p>
        <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300'>Get Started</button>
      </div>
     </header>
     {/* Main Content Start */}
     <main>
      <section className='max-w-6xl mx-auto mt-20'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Popular Destinations</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

          {/* Sajek */}
 <div className='border rounded-lg overflow-hidden shadow-lg'>
            <img src={sajekImg} alt="Sajek" className='w-full h-48 object-cover' />
           <div className='flex justify-between items-center p-3'>

 <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>Sajek</h3>
              <p className='text-gray-600'>Enjoy cloud-kissed hills, breathtaking sunsets, and serene views above the clouds.</p>
            </div>
          
           </div>
           {/* Details */}
       <div className="flex items-center justify-between px-6 pb-4">
  
  {/* Details Button */}
  <div>
    <button
      className="btn w-36 h-12"
      onClick={() => document.getElementById('my_modal_1').showModal()}
    >
      Details
    </button>

    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">
          {/* Details About Tour */}
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>

  {/* Book Now Button */}
  <button className="bg-blue-600 text-white w-36 h-12 rounded-lg transition duration-300">
    Book Now
  </button>

</div>
          </div>

          
             {/* Bandarban */}
 <div className='border rounded-lg overflow-hidden shadow-lg'>
            <img src={bandarbanImg} alt="Bandarban" className='w-full h-48 object-cover' />
           <div className='flex justify-between items-center p-3'>

 <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>Bandarban</h3>
              <p className='text-gray-600'>Explore majestic hills, waterfalls, and untouched natural beauty in Bangladesh’s most adventurous region</p>
            </div>
          
           </div>
           {/* Details */}
       <div className="flex items-center justify-between px-6 pb-4">
  
  {/* Details Button */}
  <div>
    <button
      className="btn w-36 h-12"
      onClick={() => document.getElementById('my_modal_1').showModal()}
    >
      Details
    </button>

    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">
          {/* Details About Tour */}
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>

  {/* Book Now Button */}
  <button className="bg-blue-600 text-white w-36 h-12 rounded-lg transition duration-300">
    Book Now
  </button>

</div>
          </div>

          
             {/* Rangamati */}
 <div className='border rounded-lg overflow-hidden shadow-lg'>
            <img src={rangamatiImg} alt="Rangamati" className='w-full h-48 object-cover' />
           <div className='flex justify-between items-center p-3'>

 <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>Rangamati</h3>
              <p className='text-gray-600'>Discover scenic lakes, green hills, and rich indigenous culture in the heart of the Chittagong Hill Tracts.</p>
            </div>
          
           </div>
           {/* Details */}
       <div className="flex items-center justify-between px-6 pb-4">
  
  {/* Details Button */}
  <div>
    <button
      className="btn w-36 h-12"
      onClick={() => document.getElementById('my_modal_1').showModal()}
    >
      Details
    </button>

    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">
          {/* Details About Tour */}
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>

  {/* Book Now Button */}
  <button className="bg-blue-600 text-white w-36 h-12 rounded-lg transition duration-300">
    Book Now
  </button>

</div>
          </div>

        

           {/* Cox's Bazar */}
          <div className='border rounded-lg overflow-hidden shadow-lg'>
            <img src={coxImg} alt="Cox's Bazar" className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>Cox's Bazar</h3>
              <p className='text-gray-600'>Relax on the world's longest natural sea beach with stunning views.</p>
            </div>
            {/* Details */}
       <div className="flex items-center justify-between px-6 pb-4">
  
  {/* Details Button */}
  <div>
    <button
      className="btn w-36 h-12"
      onClick={() => document.getElementById('my_modal_1').showModal()}
    >
      Details
    </button>

    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">
          {/* Details About Tour */}
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>

  {/* Book Now Button */}
  <button className="bg-blue-600 text-white w-36 h-12 rounded-lg transition duration-300">
    Book Now
  </button>

</div>
          </div>

              {/* Saint Martin */}
          <div className='border rounded-lg overflow-hidden shadow-lg'>
            <img src={saintMartinImg} alt="Saint Martin" className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>Saint Martin</h3>
              <p className='text-gray-600'>Relax on the world's longest natural sea beach with stunning views.</p>
            </div>
            {/* Details */}
       <div className="flex items-center justify-between px-6 pb-4">
  
  {/* Details Button */}
  <div>
    <button
      className="btn w-36 h-12"
      onClick={() => document.getElementById('my_modal_1').showModal()}
    >
      Details
    </button>

    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">
          {/* Details About Tour */}
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>

  {/* Book Now Button */}
  <button className="bg-blue-600 text-white w-36 h-12 rounded-lg transition duration-300">
    Book Now
  </button>

</div>
          </div>

             {/* Sunamganj */}
          <div className='border rounded-lg overflow-hidden shadow-lg'>
            <img src={sunamganjImg} alt="Sunamganj" className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>Tanguar Haor</h3>
              <p className='text-gray-600'>Relax on the world's longest natural sea beach with stunning views.</p>
            </div>
            {/* Details */}
       <div className="flex items-center justify-between px-6 pb-4">
  
  {/* Details Button */}
  <div>
    <button
      className="btn w-36 h-12"
      onClick={() => document.getElementById('my_modal_1').showModal()}
    >
      Details
    </button>

    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">
          {/* Details About Tour */}
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>

  {/* Book Now Button */}
  <button className="bg-blue-600 text-white w-36 h-12 rounded-lg transition duration-300">
    Book Now
  </button>

</div>
          </div>

             {/* Sylhet */}
          <div className='border rounded-lg overflow-hidden shadow-lg'>
            <img src={sylhetImg} alt="Sylhet" className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>Sylhet</h3>
              <p className='text-gray-600'>Explore lush tea gardens and picturesque landscapes in the hills of Sylhet.</p>
            </div>
            {/* Details */}
       <div className="flex items-center justify-between px-6 pb-4">
  
  {/* Details Button */}
  <div>
    <button
      className="btn w-36 h-12"
      onClick={() => document.getElementById('my_modal_1').showModal()}
    >
      Details
    </button>

    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">
          {/* Details About Tour */}
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>

  {/* Book Now Button */}
  <button className="bg-blue-600 text-white w-36 h-12 rounded-lg transition duration-300">
    Book Now
  </button>

</div>
          </div>

          {/* Kuakata */}
          <div className='border rounded-lg overflow-hidden shadow-lg'>
            <img src={kuakataImg} alt="Kuakata" className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>Kuakata</h3>
              <p className='text-gray-600'>Enjoy panoramic sea views and beautiful sunsets at the "Daughter of the Sea."</p>
            </div>
            {/* Details */}
       <div className="flex items-center justify-between px-6 pb-4">
  
  {/* Details Button */}
  <div>
    <button
      className="btn w-36 h-12"
      onClick={() => document.getElementById('my_modal_1').showModal()}
    >
      Details
    </button>

    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">
          {/* Details About Tour */}
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>

  {/* Book Now Button */}
  <button className="bg-blue-600 text-white w-36 h-12 rounded-lg transition duration-300">
    Book Now
  </button>

</div>
          </div>

          {/* Sundarban */}
          <div className='border rounded-lg overflow-hidden shadow-lg'>
            <img src={sundarbanImg} alt="Sundarbans" className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>Sundarbans</h3>
              <p className='text-gray-600'>Experience the largest mangrove forest in the world and its unique wildlife.</p>
            </div>
          </div>
         
       
  
        </div>
      </section>


      <section>

      </section>

     </main>
      {/* Main Content End */}
     <footer>
      <div className='text-center p-5 mt-20 bg-gray-200'>
       <div>
        <h2 className='text-2xl font-bold mb-4 text-center mt-10'>Stay Connected</h2>
        <div className='flex justify-center gap-6'>
          <input type="email" placeholder="Enter your email" className='border p-2 rounded-lg w-64' />
          <button className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300'>Subscribe</button>
        </div>
       </div>
      </div>
      <div>
        <div>
   <h2 className="font-bold text-xl mb-3">About Us</h2>
        <p class="text-gray-300 leading-relaxed">
          The main motive of Hinduism is to achieve Moksha,
          or liberation from the cycle of birth and death,
          by realizing the true self (Atman) and uniting it with
          the Supreme Reality (Brahman) through righteous living,
          good deeds, knowledge, and devotion to God.
        </p>
        </div>
        <div>
<h2 className="font-bold text-xl">Contact Information</h2>
<p className="mt-2 text-gray-300">For inquiries, please reach out to us at:</p>
<p className="mt-1 text-gray-300">Email: r17.gfx@gmail.com</p>
<p className="mt-1 text-gray-300">Phone: +88 01568931456</p>
        </div>
        <div>

        </div>
      </div>
      <p className='text-center p-5 mt-20 bg-gray-300'>&copy; 2024 Tourism Bangladesh. All rights reserved.</p>
     </footer>
      {/*  */}
      
    </>
  )
}

export default App
