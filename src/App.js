import Headers from "./components/Headers";
import Prototypes from "./components/Prototypes";
import Orders from "./components/Orders";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Headers />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </>
  );
}

export default App;
