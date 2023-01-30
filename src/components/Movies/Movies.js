import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';


function Movies() {
  return (
    <>
      <Header 
        color={"white"}
        children={
          <Navigation />
        }
      />
      <SearchForm />
      <Footer /> 
    </>
  );
}

export default Movies;