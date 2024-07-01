import styles from "./styles.module.css";

export const About: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div>Xxxxx Ashley</div>
      <div>
        <p>
          2th Floor xxxxx Building x-x-x Nishiazabu, Minato-ku, Tokyo 106-0031
          Japan
        </p>
        <p>tel: 000-0000-0000</p>
        <p>url: www.xxxxxx.jp</p>
        <p>mail: xxx@xxxxxx.jp</p>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
    </div>
  );
};
