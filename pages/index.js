import Home from '../screens/Home';

export async function getServerSideProps() {
  const dataAPI = await fetch(`http://localhost:3000/api/games`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((res) => {
      return res;
    });
  return {
    props: {
      games: dataAPI.games,
    },
  };
}

export default Home;
