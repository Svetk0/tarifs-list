
import './App.css';
import CardT from './components/card/CardT';
import { data } from './components/data/DataInfo';
function App() {
  return (
    <div className="containerMain">
      <CardT data= {data} />
    </div>
  );
}

export default App;
