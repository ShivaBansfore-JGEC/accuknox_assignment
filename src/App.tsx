import "./style/App.scss";
import Dashboard from "./components/Dasboard";
import { Provider } from 'react-redux';
import { store } from "../src/redux-store/store";


function App() {
  return (
    <div className="App">
      <Provider store={store}>

        <Dashboard />
      </Provider>

    </div>
  );
}

export default App;
