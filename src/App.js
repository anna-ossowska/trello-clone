import { Board, Navbar } from './components/index';
import BoardContextProvider from './contexts/BoardContext';

const App = () => {
  return (
    <BoardContextProvider>
      <div>
        <Navbar />
        <Board />
      </div>
    </BoardContextProvider>
  );
};

export default App;
