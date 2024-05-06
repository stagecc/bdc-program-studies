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
    <a
      href="https://biodatacatalyst.nhlbi.nih.gov/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={bdcLogo} />
    </a>
  </header>
);
