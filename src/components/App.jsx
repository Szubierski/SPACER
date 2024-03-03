import style from './App.module.css';
import Footer from './footer/Footer';
import Header from './header/Header';

function App() {
  return (
    <div className={style.App}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;