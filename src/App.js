import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import Board from './components/Board';
import "./styles.css"

function App(){
  return (<>
    {/* can be self closing tag */}
    {/* for img and input tags (reg self-closing tags), you HAVE to put a self-closing slash ==> /> */}
    <Header/>
    {/* or use an opening and closing tag */}
    <Player whichPlayer="x" ></Player>
    <Player whichPlayer="o" />
    <Board/>
  </>)
}

export default App;