import axios from 'axios';
import { useEffect, useState } from 'react';
import style from './App.module.css';
import Footer from '../../components/footer/Footer';
import Header from '../header/Header';
import Gallery from '../gallery/Gallery';

function App() {

  const [view, setView] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (loading) {
      const getData = () => {
        const API_URL = `https://images-api.nasa.gov/search?q=${searchText}&media_type=image`;
        axios.get(API_URL).then(res => {
          setData(prevValue => prevValue = res.data.collection.items)
          console.log("Everything is ok :D");
        }).catch(() => {
          console.log("Something gone wrong!");
        });
      }

      setTimeout(getData, 500);
    }
    setLoading(prevValue => false);
  }, [searchText, loading]);

  const handleButtonClick = () => {
    setLoading(true);
  };

  return (
    <div className={style.App}>
      <Header
        view={view}
        setView={setView}
        setSearchText={setSearchText}
        handleButtonClick={handleButtonClick}
        searchText={searchText}
      />
      {!view && <Gallery searchText={searchText} data={data} loading={loading} />}
      <Footer />
    </div>
  );
}

export default App;