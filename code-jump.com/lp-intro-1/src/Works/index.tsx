import styles from "./styles.module.css";

export const Works: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      {[...Array(6)].map((_, i) => {
        const path = `/works${i + 1}.jpg`;
        return <img key={i} src={path} alt={path} />;
      })}
    </div>
  );
};
