import { Programs } from "./Programs";
import { Studies } from "./Studies";
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
        <CardSection title="Programs">
          <Programs selectedProgram={program} setSelectedProgram={setProgram} />
        </CardSection>
        <CardSection title="Studies">
          {program === null ? (
            "Please select a program"
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
