import { Programs } from "./components/Programs";
import { Studies } from "./components/Studies";
import { Card, CardSection } from "./components/Card/Card";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { useQueryParams } from "./hooks/useQueryParams";

function App() {
  const [program, setProgram] = useQueryParams(null, "program");

  return (
    <Wrapper>
      <Header />
      <Card>
        <CardSection title={<div id="programs-title">Programs</div>}>
          <Programs selectedProgram={program} setSelectedProgram={setProgram} />
        </CardSection>
        <CardSection
          title={`Studies${program === null ? "" : ` - ${program}`}`}
          ariaLabeledBy={`tab-${program}`}
          id={`tabpanel-${program}`}
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
      <Footer />
    </Wrapper>
  );
}

export default App;
