import Header from './components/header/index';
import './App.css';
import { useState } from 'react';
import SideBar from './components/Sidebar';
import FileView from './components/fileView/fileView';
import SideIcon from './components/sideicons';
import GDlogo from './assets/google-drive-logo.png';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

function App() {
  const [user, setUser] = useState();

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleLogin = () => {
    if (!user) {
      provider.setCustomParameters({
        prompt: 'select_account' 
      });

      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          console.error("Error during sign in:", error);
        });
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Error during sign out:", error);
      });
  };

  return (
    <div className="App">
      {user ? (
        <>
          <Header userPhoto={user.photoURL} onLogout={handleLogout} />
          <div className='app__main'>
            <SideBar />
            <FileView />
            <SideIcon />
          </div>
        </>
      ) : (
        <div className='app__login'>
          <img src={GDlogo} alt="Google Drive" />
          <button onClick={handleLogin}>Log in to Google Drive</button>
        </div>
      )}
    </div>
  );
}

export default App;
