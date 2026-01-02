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
import './App.css'


function App() {


  return (
    <>
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
     <header>
      <div className='text-center mt-20'>
        <h1 className='text-5xl font-bold mb-4'>Explore the Beauty of Bangladesh</h1>
        <p className='text-xl mb-8'>Discover breathtaking destinations, rich culture, and unforgettable experiences.</p>
        <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300'>Get Started</button>
      </div>
     </header>
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
              <p className='text-gray-600'>Sajek</p>
            </div>
            <div>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Details</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
            </div>





           </div>
           <button className='bg-blue-600 text-white px-6 py-3 rounded-lg  transition duration-300 text-center'>Book Now</button>
          </div>

          {/* Bandarban */}
           <div className='border rounded-lg overflow-hidden shadow-lg'>
            <img src={bandarbanImg} alt="Bandarban" className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>Bandarban</h3>
              <p className='text-gray-600'>Bandarban</p>
            </div>
          </div>

          {/* Rangamati */}
            <div className='border rounded-lg overflow-hidden shadow-lg'>
            <img src={rangamatiImg} alt="Rangamati" className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>Rangamati</h3>
              <p className='text-gray-600'>Rangamati</p>
            </div>
          </div>

           {/* Cox's Bazar */}
          <div className='border rounded-lg overflow-hidden shadow-lg'>
            <img src={coxImg} alt="Cox's Bazar" className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>Cox's Bazar</h3>
              <p className='text-gray-600'>Relax on the world's longest natural sea beach with stunning views.</p>
            </div>
          </div>

              {/* Saint Martin */}
          <div className='border rounded-lg overflow-hidden shadow-lg'>
            <img src={saintMartinImg} alt="Saint Martin" className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>Saint Martin</h3>
              <p className='text-gray-600'>Relax on the world's longest natural sea beach with stunning views.</p>
            </div>
          </div>

             {/* Sunamganj */}
          <div className='border rounded-lg overflow-hidden shadow-lg'>
            <img src={sunamganjImg} alt="Sunamganj" className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>Tanguar Haor</h3>
              <p className='text-gray-600'>Relax on the world's longest natural sea beach with stunning views.</p>
            </div>
          </div>

             {/* Sylhet */}
          <div className='border rounded-lg overflow-hidden shadow-lg'>
            <img src={sylhetImg} alt="Sylhet" className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>Sylhet</h3>
              <p className='text-gray-600'>Explore lush tea gardens and picturesque landscapes in the hills of Sylhet.</p>
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

     </main>
      
    </>
  )
}

export default App
