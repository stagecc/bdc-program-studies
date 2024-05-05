import styles from "./Header.module.css";
import bdcLogo from "../../media/bdc-logo.svg";

export const Header = () => (
  <header className={styles.header}>
    <div>
      <h1>
        BDC<sup>®</sup> Program Studies
      </h1>
      <p>View studies conducted by NHLBI BioData Catalyst® (BDC) programs.</p>
    </div>
    <img src={bdcLogo} />
  </header>
);
