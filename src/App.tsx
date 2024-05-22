import { Programs } from "./components/Programs";
import { Studies } from "./components/Studies";
import { Card, CardSection } from "./components/Card/Card";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { useQueryParams } from "./hooks/useQueryParams";
import { toKebabCase } from "./utils";
import { useState } from "react";
import styles from "./App.module.css";
import { FullScreenIconButton } from "./components/FullScreenIconButton/FullScreenIconButton";

function App() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <Wrapper>
      <Header />

      <FullscreenManager isFullscreen={isFullscreen}>
        <MainContent
          isFullscreen={isFullscreen}
          setIsFullscreen={setIsFullscreen}
        />
      </FullscreenManager>

      <Footer />
    </Wrapper>
  );
}

function FullscreenManager({
  children,
  isFullscreen,
}: {
  children: React.ReactNode;
  isFullscreen: boolean;
}) {
  if (isFullscreen)
    return (
      <dialog open className={styles.dialog}>
        {children}
      </dialog>
    );
  return children;
}

function MainContent({
  isFullscreen,
  setIsFullscreen,
}: {
  isFullscreen: boolean;
  setIsFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [program, setProgram] = useQueryParams(null, "program");

  return (
    <Card>
      <CardSection title={<div id="programs-title">Programs</div>}>
        <Programs selectedProgram={program} setSelectedProgram={setProgram} />
      </CardSection>
      <CardSection
        title={
          <div className={styles.studiesHeader}>
            {`Studies${program === null ? "" : ` - ${program}`}`}
            <FullScreenIconButton
              isFullscreen={isFullscreen}
              onClick={() => setIsFullscreen(!isFullscreen)}
            />
          </div>
        }
        ariaLabeledBy={
          program === null ? undefined : `tab-${toKebabCase(program)}`
        }
        id={program === null ? undefined : `tabpanel-${toKebabCase(program)}`}
      >
        {program === null ? (
          <div
            style={{
              display: "flex",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
            }}
          >
            Please select a program to view available studies.
          </div>
        ) : (
          <Studies programKey={program} />
        )}
      </CardSection>
    </Card>
  );
}

export default App;
