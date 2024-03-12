import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ArticleContainer from './Components/ArticleContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <ArticleContainer />
      <Footer/>
    </div>
  );
}

export default App;
