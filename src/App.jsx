import React from 'react'
import logo from './assets/TourismBangladesh.png'
import './App.css'


function App() {


  return (
    <>
    <nav className='max-w-[1700px] mx-auto flex justify-between items-center p-5'>
 <div className=''>
        <img className='h-50 w-50' src={logo} alt="Tourism Bangladesh" />
      </div>
      <div>
        <ul className='flex justify-center gap-10 text-xl font-semibold p-20'>
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
          <div className='border rounded-lg overflow-hidden shadow-lg'>
            <img src="https://example.com/sundarbans.jpg" alt="Sundarbans" className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>Sundarbans</h3>
              <p className='text-gray-600'>Experience the largest mangrove forest in the world and its unique wildlife.</p>
            </div>
          </div>
          <div className='border rounded-lg overflow-hidden shadow-lg'>
            <img src="https://example.com/coxsbazar.jpg" alt="Cox's Bazar" className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>Cox's Bazar</h3>
              <p className='text-gray-600'>Relax on the world's longest natural sea beach with stunning views.</p>
            </div>
          </div>
          <div className='border rounded-lg overflow-hidden shadow-lg'>
            <img src="https://example.com/sylhet.jpg" alt="Sylhet" className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>Sylhet</h3>
              <p className='text-gray-600'>Explore lush tea gardens and picturesque landscapes in the hills of Sylhet.</p>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </section>

     </main>
      
    </>
  )
}

export default App
