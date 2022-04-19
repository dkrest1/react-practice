import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.jsx";
import Header from "./components/Header.jsx";
import { Container } from "./components/styles/Container.styled";
import contents from "./contents";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const theme = {
    colors: {
      header: "#eefbff",
      body: "#fff",
      footer: "#003333",
    },

    mobile: "768px",
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {contents.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
