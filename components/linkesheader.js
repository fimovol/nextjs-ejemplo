import Link from 'next/link'
import styles  from '../styles/Home.module.css'

export const Header = () => {
    return <>
        <header className={styles.header}>
            <Link href="/"><span className={styles.estilos}>home</span></Link>
            <Link href="/pagina"><span className={styles.estilos}>pagina</span></Link>
            <Link href="/otrapage"><span className={styles.estilos}>otra pagina</span></Link>
        </header>
    </>
}

export const Fotter = () => {
    return <>
        <footer className={styles.footer}>
            <Link href="/"><span className={styles.estilos}>home</span></Link>
            <Link href="/pagina"><span className={styles.estilos}>pagina</span></Link>
            <Link href="/otrapage"><span className={styles.estilos}>otra pagina</span></Link>
        </footer>
    </>
}

export const Nav = () => {
    return <>
        <nav className={styles.nav}>
            <Link href="/"><span className={styles.estilos}>home</span></Link>
            <Link href="/pagina"><span className={styles.estilos}>pagina</span></Link>
            <Link href="/otrapage"><span className={styles.estilos}>otra pagina</span></Link>
        </nav>
    </>
}

export const Aside = () => {
    return <>
        <aside className={styles.aside}>
            <h1>este es el condedido que esta dentro de aside</h1>
            <p>asjdasjkdhaskh dkash jk hjkhasjkfh aksdjlh fklasdhflak sh</p>
            <p>asjdasjkdhaskh dkash jk hjkhasjkfh aksdjlh fklasdhflak sh</p>
            <p>asjdasjkdhaskh dkash jk hjkhasjkfh aksdjlh fklasdhflak sh</p>
            <p>asjdasjkdhaskh dkash jk hjkhasjkfh aksdjlh fklasdhflak sh</p>

        </aside>
        <style jsx>{`
        h1{
            color:#0099ff;
        }
        `}</style>
    </>
}
export const Main = ({children}) => {
    return <>
        <main>
            <article>
                {children}
            </article>
        </main>
        <style jsx>{`
        main{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        article{
            width: 98%;
        }
        `}</style>
    </>
}