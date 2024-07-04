import styles from "./styles.module.css";

export const Contact: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <p>NAME</p>
        <input type="text" />
      </div>
      <div className={styles.row}>
        <p>EMAIL</p>
        <input type="text" />
      </div>
      <div className={styles.row}>
        <p>MESSAGE</p>
        <textarea rows={5} />
      </div>
      <button className={styles.submit}>送信</button>
    </div>
  );
};
