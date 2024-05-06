import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Banner from "./components/banners/Banners";
import Hero from "./components/hero/Hero"

function App() {

  return (
     <>
       <Header />
       <Hero/>
        <Main />
        <Banner />
     </>
  );
}

export default App;
