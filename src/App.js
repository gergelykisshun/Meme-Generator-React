import React from 'react';

// COMPONENTS
import Header from './Components/Header/Header';
import MemeCaption from './Components/MemeCaption/MemeCaption';
import NewsLetterForm from './Components/NewsLetterForm/NewsLetterForm';

// DATA
// faking an existing user
const userCred = {
  email: "frank@user.com",
  password: "12345"
}


function App() {
  return (
    <>
      <Header />
      <MemeCaption />
      <NewsLetterForm userData={userCred}/>
    </>
  );
}

export default App;
