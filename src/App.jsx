import { Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import ResultsChart from "./components/ResultsChart/ResultsChart";
import axios from "axios";
import MarksChart from "./components/MarksChart/MarksChart";

const pricingPromise = fetch('pricingData.json').then(res=> res.json());
const marksPromise = axios.get('marksData.json')

function App() {
  return (
    <>
      <header>
        <NavBar> </NavBar>
      </header>

      <main>
        <Suspense fallback ={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <ResultsChart> </ResultsChart>

        <Suspense fallback ={<span className="loading loading-spinner loading-lg"></span>}>
          <MarksChart marksPromise={marksPromise}> </MarksChart>
        </Suspense>
      </main>
    </>
  );
}

export default App;
