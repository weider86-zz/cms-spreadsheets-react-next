import React from 'react';

export default function Home({games}) {
  return (
    <>
      <main>
        <h1>🕹️ Top games on my life 🕹️</h1>
        <ul>
          {games.map((game, index) => {
            const position = index + 1;
            return (
              <li key={game.name}>
                <span>
                  <span className='index'>{`#${position} `}</span>
                  <span>{game.name}</span>
                </span>
                <img src={game.image} alt={game.name} />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
