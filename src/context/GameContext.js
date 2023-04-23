import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import initialCards from '../cards-data';

const GameContext = createContext();

export function GameContextProvider({ children }) {
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [to, setTo] = useState(1);
  const [from, setFrom] = useState('deck');
  const [deck, setDeck] = useState(initialCards);

  return (
    <GameContext.Provider
      value={{
        deck,
        setDeck,
        playerOneHand,
        setPlayerOneHand,
        selectedCard,
        setSelectedCard,
        playerTwoHand,
        setPlayerTwoHand,
        playerThreeHand,
        setPlayerThreeHand,
        from,
        setFrom,
        to,
        setTo,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);

  return context;
}