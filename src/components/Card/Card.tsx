import styles from "./Card.module.css";
import type { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
}

export const Card = ({ children }: CardProps) => (
  <div className={styles.card}>{children}</div>
);

interface CardSectionProps {
  title: ReactNode;
  children?: ReactNode;
}

export const CardSection = ({ title, children }: CardSectionProps) => {
  return (
    <div className={styles.section}>
      <header className={styles.sectionHeader}>{title}</header>
      <div className={styles.sectionContent}>{children}</div>
    </div>
  );
};
