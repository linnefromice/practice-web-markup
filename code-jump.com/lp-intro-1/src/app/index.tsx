import { About } from "../About";
import { Contact } from "../Contact";
import { Contents } from "../Contents";
import { Header } from "../Header";
import { News } from "../News";
import { Works } from "../Works";
import styles from "./styles.module.css";

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <img src="/mainvisual-pc.jpg" alt="mainvisual" />
      <Contents title={`About`}>
        <About />
      </Contents>
      <Contents title={`Works`}>
        <Works />
      </Contents>
      <Contents title={`News`}>
        <News />
      </Contents>
      <Contents title={`Contact`}>
        <Contact />
      </Contents>
    </div>
  );
}

export default App;
