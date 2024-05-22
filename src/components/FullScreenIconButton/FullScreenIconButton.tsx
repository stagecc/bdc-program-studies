import styles from "./FullScreenIconButton.module.css";

interface FullScreenIconButtonProps {
  isFullscreen: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const FullScreenIconButton = ({
  isFullscreen,
  onClick,
}: FullScreenIconButtonProps) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      title={isFullscreen ? "Exit full screen" : "Enter full screen"}
    >
      {isFullscreen ? <FullscreenIcon /> : <ExitFullscreenIcon />}
    </button>
  );
};

function FullscreenIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="currentColor"
    >
      <path d="M240-120v-120H120v-80h200v200h-80Zm400 0v-200h200v80H720v120h-80ZM120-640v-80h120v-120h80v200H120Zm520 0v-200h80v120h120v80H640Z" />
    </svg>
  );
}

function ExitFullscreenIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="currentColor"
    >
      <path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z" />
    </svg>
  );
}
