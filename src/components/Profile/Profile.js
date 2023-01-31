import './Profile.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

function Profile() {
  return (
    <>
      <Header 
        color={"white"}
        children={
          <Navigation />
        }
      />
    </>
  );
}

export default Profile;