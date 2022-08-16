import Home from "./pages/Home"
import { Container } from "react-bootstrap";
import "./index.css"
import Header from "./components/Header";

function App() {

  return (
    <>
      <Header />
      <Container>
        <Home />
      </Container>
    </>
  )
}

export default App;
