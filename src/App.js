import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import CustomPaginationActionsTable from './components/Table';

function App() {
  return (
    <div className="App">
      <Navbar/>    
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
