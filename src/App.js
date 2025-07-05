import './App.css';
import {AllRoutes} from "./routes/AllRoutes"
import {Header, Footer} from "./components/"
function App() {
  return (
    <div className="App dark:bg-customBackground dark:text-customWhite">
      <Header />
        <AllRoutes></AllRoutes>
      <Footer />
    </div>
  );
}

export default App;
