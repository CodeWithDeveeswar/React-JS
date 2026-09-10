import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  let user = "Deveeswar";

  return (
    <>
      <Header user={user} />
      <Content />
      <Footer user="Akilan" />
    </>
  );
}

export default App;
