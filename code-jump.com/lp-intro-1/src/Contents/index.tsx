import styles from './styles.module.css'

export const Contents = (props) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.spacer} />
      {props.children}
    </div>
  )
}

