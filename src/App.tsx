import { Programs } from "./Programs";
import { Studies } from "./Studies";
import { Card, CardSection } from "./components/Card/Card";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Wrapper } from "./components/Wrapper/Wrapper";

function App() {
  return (
    <Wrapper>
      <Header />
      <Card>
        <CardSection title="Programs">
          <Programs />
        </CardSection>
        <CardSection title="Studies">
          <Studies programKey={"AnVIL"} />
        </CardSection>
      </Card>
      <Footer />
    </Wrapper>
  );
}

export default App;
