import styles from './Header.module.css'

export function Header() {
return (
    <header className={styles.container}>
    <img src="/logo.svg" alt="logo da aplicação" />
    <strong className={styles.text_1}>Tick</strong>
    <strong className={styles.text_2}>List</strong>
    </header>
)
}