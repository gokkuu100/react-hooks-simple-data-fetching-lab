import React, { useEffect, useState } from 'react';

function App() {
  const [randomdog, setRandomDog] = useState('');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((resp) => resp.json())
      .then((data) => {
        setRandomDog(data.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? ( 
        <p>Loading...</p>
      ) : (
        <img src={randomdog} alt='A Random Dog' />
      )}
    </div>
  );
}

export default App;
