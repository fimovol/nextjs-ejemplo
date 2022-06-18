import Head from 'next/head'
import Image from 'next/image'
import { Componente } from "../../componets/componentedefinitivo";
import yo from '../../estaticos/me.jpg'
export default function Otrapagina(){
    return<>
        <Head>
            <title>otra pagina </title>
            <meta name="description" content="paginas" />
        </Head>
        <Componente>
            <h1>hola este es <strong>OTRA</strong> PAGINA </h1>
            <h1>hola este es <strong>OTRA</strong> PAGINA </h1>
            <h1>hola este es <strong>OTRA</strong> PAGINA </h1>

            <h1>hola este es <strong>OTRA</strong> PAGINA </h1>
            <h1>hola este es <strong>OTRA</strong> PAGINA </h1>
            <h1>hola este es <strong>OTRA</strong> PAGINA </h1>
            <h1>hola este es <strong>OTRA</strong> PAGINA </h1>

            <h1>hola este es <strong>OTRA</strong> PAGINA </h1>
            <h1>hola este es <strong>OTRA</strong> PAGINA </h1>
            <h1>hola este es <strong>OTRA</strong> PAGINA </h1>
            <h1>hola este es <strong>OTRA</strong> PAGINA </h1>

            <h1>hola este es <strong>OTRA</strong> PAGINA </h1>

            <h1>hola este es <strong>OTRA</strong> PAGINA </h1>
            <h1>hola este es <strong>OTRA</strong> PAGINA </h1>
            <Image
                src={yo}
                alt="Picture of the author"
                width={400}
                height={600}
            />
        </Componente>
    </>
}