import logo from './logo.svg';
import'./Styles.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Project from './components/Project';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/>
      <Project/>
    </div>
  );
}

export default App;
