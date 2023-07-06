
import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import { GameContextProvider } from "./context/GameContext";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import InfoGame from "./components/InfoGame/InfoGame";
import SoundPlay from "./components/SoundPlay/SoundPlay";

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
    <div className="App flex justify-center overflow-hidden min-h-screen p-4">
      {loading ? (
        <Loading />
      ): (
        <div className="content-main flex flex-col justify-between">
          <GameContextProvider>
            {!isStarted ? (
              <StartPage handleStartGame={handleStartGame} />
            ): (
              <GamePage started={setIsStarted} />
            )}
          </GameContextProvider>
          <div className="flex items-end justify-between">
            {/* Sound on or off */}
            <SoundPlay />

            {/* Info */}
            <InfoGame />
          </div>
            
        </div>
      )}
    </div>
  );
}

export default App;
