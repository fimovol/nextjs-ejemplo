import { Aside, Fotter, Header, Main, Nav } from './linkesheader'
export const Componente = ({children})=> {
    return<>
        <Header/>
        <Nav/>
        <div>
            <Main>
            {children}
            </Main>
            <Aside/>
        </div>
      <Fotter/>
      <style jsx>{`
        div{
            display: grid;
            grid-template-columns: 70% 30%;
        }
      `}</style>
    </>
}