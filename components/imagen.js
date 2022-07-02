import ceviche from '../estaticos/ceviche.png'
import Image from 'next/image'
export const ImagenComponente = () => {
    return <>
      <div>
        <Image src={ceviche} alt='ceviche imagen'/>
      </div>
    </>
}