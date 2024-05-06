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
  ariaLabeledBy?: string;
  tabPanel?: boolean;
  id?: string;
}

export const CardSection = ({
  title,
  children,
  ariaLabeledBy,
  tabPanel = false,
  id,
}: CardSectionProps) => {
  return (
    <div className={styles.section}>
      <header className={styles.sectionHeader}>{title}</header>
      <div
        className={styles.sectionContent}
        aria-labelledby={ariaLabeledBy}
        role={tabPanel ? "tabpanel" : undefined}
        id={id}
      >
        {children}
      </div>
    </div>
  );
};
