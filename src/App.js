import logo from './logo.svg';
import './App.css';
import { Skills } from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Skills skills = {['HTML', 'CSS', 'JavaScript']}/>
    </div>
  );
}

export default App;
