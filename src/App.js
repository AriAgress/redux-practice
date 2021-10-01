import './App.css';
import { useSelector } from 'react-redux';

import MovieCard from './components/MovieCard'
import AppBody from './components/appstyle'
import Search from './components/search';
import Nav from './components/navBar';
import ModeSwitch from './components/ModeSwitch'

function App() {
    const colorSwitch = useSelector(state => state.colorSwitch);

  return (
    <AppBody colorSwitch={colorSwitch} >
      <Nav>
        <Search />
      </Nav>
      <ModeSwitch>hit me</ModeSwitch>
      <MovieCard/>
    </AppBody>
  );
}

export default App;
