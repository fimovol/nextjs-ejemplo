import Head from 'next/head'
import { Readmore } from '../components/buttonlearmore'
import { Cajadetexto } from '../components/cajadetexto'
import { EfectoBotonEscondido } from '../components/efectobotonescondido'
import { ImagenComponente } from '../components/imagen'
import { InputTailwind } from '../components/inputs'
import { Modalmove } from '../components/modalmove'
import { Navtemplete } from '../components/nav'
import { SeeMore } from '../components/seemore'
import { Titulocomponent } from '../components/titulo'
import { TituloPerron } from '../components/titulolandingpage'
import imagen from '../estaticos/logos.png'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>pagina principal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
{/*       
      
      <Titulocomponent/>
      <Cajadetexto/>      
      
      <SeeMore/> 
      <Modalmove/>
      <TituloPerron/>
      <EfectoBotonEscondido/> 
      <InputTailwind/> */}
      <div className='bg-indigo-400 w-full flex justify-center sm:h-screen'>
        <div className=' w-full h-20 flex justify-center items-center fixed bg-indigo-400'>
          <header className='
          w-10/12 h-full flex justify-between items-center
          '>
            <div className='flex items-center select-none'>
              <span className='uppercase text-4xl mr-6 font-mono'>
              <Image
                src={imagen}
                alt="islandia"
              />
              </span>
              <Navtemplete>inicio</Navtemplete>
              <Navtemplete>quienes somos</Navtemplete>
              <Navtemplete>nuestros locales</Navtemplete>
              <Navtemplete>buffet</Navtemplete>
              <Navtemplete>la carta</Navtemplete>
            </div>
            <div>
              <Readmore>reservar </Readmore>
            </div>
          </header>
        </div>
        <div className='
        w-10/12 h-full flex justify-between items-center flex-col pt-28 bg-indigo-400 sm:flex-row
        '>
          <div className='sm:w-full lg:w-2/5'>
            <h1 className='text-neutral-800 capitalize text-4xl font-medium'>Aqu??, sentir?? la alegr??a de un cebiche peruano</h1>
            <p className=' text-neutral-800 pt-8 pb-10'>Nuestro prop??sito es lograr sobrepasar las expectativas de nuestros clientes bas??ndonos en la mejora continua de la calidad, servicio, limpieza, sabor y saz??n</p>
            <Readmore>LEER MAS</Readmore>
          </div>
          <ImagenComponente/>
        </div>
      </div>
    </>
  )
}
