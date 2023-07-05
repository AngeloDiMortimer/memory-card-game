
import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import { GameContextProvider } from "./context/GameContext";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  function handleStartGame() {
    setIsStarted(true);
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
              <GamePage started={setIsStarted} />
            )}
          </GameContextProvider>
        </div>
      )}
    </div>
  );
}

export default App;
