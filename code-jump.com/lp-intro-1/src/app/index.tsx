import { About } from "../About";
import { Contents } from "../Contents";
import { Header } from "../Header";
import styles from "./styles.module.css";

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <img src="/mainvisual-pc.jpg" alt="mainvisual" />
      <Contents title={`About`}>
        <About />
      </Contents>
      <Contents title={`Works`} />
      <Contents title={`News`} />
    </div>
  );
}

export default App;
