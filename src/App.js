import BarChart from "./components/BarChart";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  // dispatch(getStats);
  return (
    <div>
      <Header></Header>
      <Card></Card>
      <BarChart />
    </div>
  );
}

export default App;
