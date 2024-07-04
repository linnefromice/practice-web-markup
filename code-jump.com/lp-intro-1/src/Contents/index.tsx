import { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  title: string;
  children?: ReactNode;
};
export const Contents: React.FC<Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.spacer} />
      {props.children}
    </div>
  );
};
