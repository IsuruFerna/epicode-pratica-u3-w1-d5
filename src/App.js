import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavComponent from "./components/NavComponent";
import BelowNavComp from "./components/BelowNavComp";
import FilmsRow from "./components/FilmsRow";
import FooterComp from "./components/FooterComp";

function App() {
   return (
      <div className="overflow-hidden">
         <header className="App-header">
            <NavComponent />
            <BelowNavComp />
         </header>
         <main>
            <FilmsRow title="Harry Potter" />
            <FilmsRow title="Lord Of The Rings" />
            <FilmsRow title="The Fast And The Furious" />
         </main>
         <footer>
            <FooterComp />
         </footer>
      </div>
   );
}

export default App;
