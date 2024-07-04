import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>My Work</h1>
      <nav className={styles.navigation}>
        <div>About</div>
        <div>Works</div>
        <div>News</div>
        <div>Contact</div>
        <img src="/icon-instagram.png" alt="Instagram" />
      </nav>
    </header>
  )
}