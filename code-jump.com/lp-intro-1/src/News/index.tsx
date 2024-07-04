import styles from "./styles.module.css";

const CONTENTS: { date: string; content: string }[] = [
  {
    date: "2020.XX.XX",
    content: "デザイン雑誌「XXXXXX Vol.11」に掲載していただきました。",
  },
  {
    date: "2020.XX.XX",
    content: "XX月XX日から写真集「XXXXXXX」の発売を開始します。",
  },
  {
    date: "2019.XX.XX",
    content: "[イベント開催のお知らせ] Lorem ipsum dolor sit amet...",
  },
  {
    date: "2019.XX.XX",
    content: "デザイン雑誌「XXXXXX Vol.10」に掲載していただきました。",
  },
  {
    date: "2019.XX.XX",
    content: "[個展開催のお知らせ] Lorem ipsum dolor sit amet...",
  },
];

export const News: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Divider />
      {CONTENTS.map(({ date, content }, i) => (
        <>
          <div key={i} className={styles.row}>
            <div className={styles.rowDate}>{date}</div>
            <div className={styles.rowContent}>{content}</div>
          </div>
          <Divider />
        </>
      ))}
    </div>
  );
};

const Divider: React.FC = () => {
  return <div className={styles.divider} />;
};
