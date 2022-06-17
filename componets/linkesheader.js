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

export const Aside = ({children}) => {
    return <>
        <aside className={styles.aside}>
            esto aprareceajkdkla k
            {children}
        </aside>
    </>
}