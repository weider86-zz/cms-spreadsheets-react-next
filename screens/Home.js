import React from 'react';
import styled from 'styled-components';
import {GlobalStyles} from '../styled/GlobalStyles';

const Title = styled.h1`
  margin-top: 50px;
  font-size: 28px;
  color: #111;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
`;

const Image = styled.img`
  width: 100px;
`;

const GameTitle = styled.p`
  font-size: 14px;
  margin-bottom: 0;
  font-weight: bold;
`;

const Position = styled.span`
  font-size: 24px;
  color: #ffb000;
`;

export default function Home({games}) {
  return (
    <>
      <GlobalStyles />
      <main>
        <Title>🕹️ Top games on my life 🕹️</Title>
        <List>
          {games.map((game, index) => {
            const position = index + 1;
            return (
              <li key={game.name}>
                <GameTitle>
                  <Position className='index'>{`#${position} `}</Position>
                  <span>{game.name}</span>
                </GameTitle>
                <Image src={game.image} alt={game.name} />
              </li>
            );
          })}
        </List>
      </main>
    </>
  );
}
