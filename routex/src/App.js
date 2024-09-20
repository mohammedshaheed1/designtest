
import './App.css';
import Center from './components/Center.jsx';
import Final from './components/Final.jsx';
import Layout from './components/Layout.jsx';
import Navbar from './components/Navbar.jsx';
import Section from './components/Section.jsx';

function App() {
  return (
    <div>
      <Navbar/>
      <Section/>
      <Center/>
      <Layout/>
      <Final/>
    </div>
  );
}

export default App;
