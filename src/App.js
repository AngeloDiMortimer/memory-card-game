
import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import { GameContextProvider } from "./context/GameContext";
import StartPage from "./pages/StartPage";

function App() {
  const [isStarted, setIsStated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  function handleStartGame() {
    setIsStated(true);
  }

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ): (
        <div className="content-main">
          <GameContextProvider>
            {!isStarted ? (
              <StartPage handleStartGame={handleStartGame} />
            ): (
              <p></p>
            )}
          </GameContextProvider>
        </div>
      )}
    </div>
  );
}

export default App;
