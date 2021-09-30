import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { darkMode } from './actions';

import MovieCard from './components/MovieCard'
import AppBody from './components/appstyle'
import Search from './components/search';
import Nav from './components/navBar';

function App() {
  const dark = useSelector(state => state);
  const dispatch = useDispatch();

  // const styles = {
  //   text: {
  //     color: dark ? 'white' : 'black',
  //   },
  // };

  return (
    <AppBody>
      <Nav>
        <Search />
      </Nav>
      <MovieCard/>
      {/* <button onClick={() => dispatch(darkMode())}>Switch</button>
      <h1 style={styles.text}>{dark ? 'this is true' : 'this is false'} </h1> */}
    </AppBody>
  );
}

export default App;
