import styles from './App.module.css'

function App() {
  return (
    <div className={styles.root}>
      <h1 className={styles.micro}>Hello World!</h1>
      <MicroContent />
    </div>
  )
}

const MicroContent = () => (
  <div className={styles.media}>
    <div className={styles["media-illustration"]}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="100" fill="#5f6368" />
      </svg>
    </div>
    <div className={styles["media-content"]}>
      <h3>Media Object</h3>
      <p>{`This is a media object. There’s an image and also some content.`}</p>
      <p>{`In this case, the content is a heading followed by two paragraphs of text.`}</p>
    </div>
</div>
)

export default App
