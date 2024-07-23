import { useState, useEffect } from 'react';
const CatsB = () => {
  const [cats, setCats] = useState([]);
  const fetchCats = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // NB response.json() will read the SJON and parse it into a JS structure
      const data = await response.json();
      setCats(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(() => {
    fetchCats();
  }, []);
  return (
    <div>
      {/* since cats is a JS object, we must convert ot JSON text... */}
      <pre>Cats: {JSON.stringify(cats)}</pre>
    </div>
  );
}
export default CatsB;