
import Head from 'next/head'
import { Aside, Fotter, Header, Nav } from '../../componets/linkesheader'
export default function pagina(){
    return(
        <>
            <Head>
                <title>hola </title>
                <meta name="description" content="paginas" />
            </Head>
            <Header/>
            <Nav/>
            <Aside>
                <h1>hola este es la pagina</h1>
            </Aside>
            
            <Fotter/>
        </>
    )
}