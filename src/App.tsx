// Dans ce Hook il est juste nécessaire d’ajouter le provider de Redux
import "./App.css";
import Shape from "./components/Shape/Shape";
import BtnSize from "./components/BtnSize/BtnSize";
import ColorSelector from "./components/ColorSelector/ColorSelector";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      {/* on note ici la présence d’un Provider (issus de la librairie react-redux), un peu similaire aux Provider des context. Les objets ( ici store ) sont partagés au sein des éléments enfants du provider sans passer par les props. */}
      <div className="App">
        <BtnSize />
        <ColorSelector />
        <Shape />
      </div>
    </Provider>
  );
}

export default App;
