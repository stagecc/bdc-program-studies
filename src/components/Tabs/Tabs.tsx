import styles from "./Tabs.module.css";
import { useState, type ReactNode } from "react";

export type TabData = {
  key: string;
  title: ReactNode;
  subtitle: ReactNode;
}[];

interface TabsProps {
  data: TabData;
  selectedTab: string | null;
  setSelectedTab: React.Dispatch<React.SetStateAction<string | null>>;
}

const Check = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="check"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export const Tabs = ({ data, selectedTab, setSelectedTab }: TabsProps) => {
  return data.map(({ key, title, subtitle }) => {
    const isSelected = key === selectedTab;

    return (
      <div
        key={key}
        onClick={() => {
          setSelectedTab(key);
        }}
        className={`${styles.tab} ${isSelected ? styles.selected : ""}`}
      >
        <div className={styles.tabHeader}>
          <p>{title}</p>
          {selectedTab === key ? <Check /> : null}
        </div>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
    );
  });
};
