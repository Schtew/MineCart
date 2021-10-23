import React from 'react';
// import useState from 'react';

import '../styles/Header.css';

// const handleLogin = () => set

function PageNames() {
    return (
        <div className="PageNames">
            <div className="PageName">
                <h1>Home</h1>
            </div>
            <div className="PageName">
                <h1>Shopping</h1>
            </div>
            <div className="PageName">
                <h1>Search</h1>
            </div>
        </div>
    );
}

// function Login() {

// }

function Currency() {
    return (
        <div className="Currency">
            <h1>KOHLS KASH:</h1>
            <h1>0</h1>
        </div>
    );
}

function Header() {

    const [isLoggedIn, setLogin] = React.useState(false);

    const handleLogin = (e) =>  {
        e.target.style.color = 'black';
        setLogin(true);
    }

    function darkenFont(e) {
        if (!isLoggedIn) {
            e.target.style.color = 'green';
        }
      }

    function lightenFont(e) {
        if (!isLoggedIn) {
            e.target.style.color = 'black';
        }
    }

    return (
        <div className="Header">
            <h1>KOHLS</h1>
            <PageNames/>
            <h1 onMouseOver={darkenFont} onMouseLeave={lightenFont} onClick={!isLoggedIn ? handleLogin : null}>{isLoggedIn ? 'Welcome CaptainSparklez' : 'Log In'}</h1>
            <Currency/>
        </div>
    );
}

export default Header
// const styles = StyleSheet.create()
