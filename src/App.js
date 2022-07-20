import { Provider } from 'react-redux';
import './App.css';
import EggContainer from './components/EggContainer';
import HookChickenContainer from './components/HookChickenContainer';
import HookEggContainer from './components/HookEggContainer';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider sore={store}>
      <EggContainer />
      <HookChickenContainer />
      <HookEggContainer />
      </Provider>
    </div>
  );
}

export default App;
