import React from 'react';
import Card from './Card';
import { useGame } from '../context/GameContext';

export default function ExecutePassButton({ passCard }) {
  const { selectedCard, from, to } = useGame();

  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} /> from{' '}
      {from} to {to}
    </div>
  );
}
