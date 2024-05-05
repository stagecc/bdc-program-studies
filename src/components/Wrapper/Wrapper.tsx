import styles from "./Wrapper.module.css";
import type { ReactNode } from "react";

export const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className={styles.wrapper}>{children}</div>
);
