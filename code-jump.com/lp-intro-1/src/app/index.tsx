import { Contents } from '../Contents'
import { Header } from '../Header'
import styles from './styles.module.css'

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <img src="/mainvisual-pc.jpg" alt="mainvisual" />
      <Contents
        title={`About`}
      >
        <div>Xxxxx Ashley</div>
        <div>
          2th Floor xxxxx Building x-x-x Nishiazabu, Minato-ku, Tokyo 106-0031 Japan
          tel: 000-0000-0000
          url: www.xxxxxx.jp
          mail: xxx@xxxxxx.jp
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </Contents>
      <Contents
        title={`Works`}
      />
      <Contents
        title={`News`}
      />
    </div>
  )
}

export default App
