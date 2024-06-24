import { useState } from "react"

export function Header () {
  const [carrito, setCarrito] = useState(0)

  return (
    <>
      <section className="bg-[#ae946d] text-white text-center font-semibold p-2 text-sm">
        <p>Envío Gratis a partir de $89.999</p>
        <p>3 Cuotas Sin Interés a partir de $50.000</p>
        <p>6 Cuotas Sin Interés a partir de $100.000</p>
      </section>

      <header>
        <section className="hidden justify-around items-center bg-[#181818] text-white p-4 text-base md:flex">
          <nav className="flex gap-x-16">
            <ul><a>NUEVO</a></ul>
            <ul><a>Mujeres</a></ul>
            <ul><a>Hombres</a></ul>
            <ul><a>Niños</a></ul>
            <ul><a>Deportes</a></ul>
          </nav>
          
           <div className="relative">
            <input className="w-full py-2 px-4 border bg-[#181818] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2" type="search" placeholder="Buscar"/>
            <button className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-[#181818] border border-gray-300 rounded-r-md hover:bg-gray-400 focus:outline-none focus:ring-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z" />
            </svg>
            </button>
          </div>  
        
          <div className="flex gap-x-10 items-center">
            <a className="flex relative"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
            </svg><span className="absolute text-sm rounded-full bg-white px-2 text-black top-0 left-5 bottom-2">{carrito}</span></a>
            <a>login</a>
          </div>
        </section>

      </header>
    </>
  )
}
