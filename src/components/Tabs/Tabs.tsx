import styles from "./Tabs.module.css";
import { useRef, type ReactNode } from "react";

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
  const tabRefs = useRef<HTMLButtonElement[]>([]);

  const focusTab = (tabIndex: number) => {
    const tabRef = tabRefs.current[tabIndex];
    if (tabRef) tabRef.focus();
  };

  const handleKeyDown = (
    tabIndex: number,
    { key }: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    const { length } = tabRefs.current;
    if (key === "ArrowDown") focusTab((tabIndex + 1) % length);
    else if (key === "ArrowUp") focusTab((tabIndex - 1 + length) % length);
    else if (key === "Home") focusTab(0);
    else if (key === "End") focusTab(length - 1);
  };

  return data.map(({ key, title, subtitle }, tabIndex) => {
    const isSelected = key === selectedTab;

    return (
      <button
        key={key}
        ref={(el) => {
          if (el !== null) tabRefs.current[tabIndex] = el;
        }}
        onClick={() => {
          setSelectedTab(key);
        }}
        onKeyDown={(e) => {
          handleKeyDown(tabIndex, e);
        }}
        className={`${styles.tab} ${isSelected ? styles.selected : ""}`}
      >
        <div className={styles.tabHeader}>
          <p>{title}</p>
          {selectedTab === key ? <Check /> : null}
        </div>
        <span className={styles.subtitle}>{subtitle}</span>
      </button>
    );
  });
};
