import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  let user = "Deveeswar";

  return (
    <div className="app">
      <Header user={user} />
      <Content />
      <Footer user="Akilan" />
    </div>
  );
}

export default App;
