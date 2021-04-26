import React from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import css from "./Header.module.css";

function Header() {
  
  const history = useHistory();
  
  function handleReturn(){
    history.goBack();
  }

    return (
        <div className={css.navbar} >
                <Link to="/home">
                  <button className={css.navbutton}>
                    Search
                  </button>
                </Link>
            
                <Link to="/home">
                  <button className={css.navbutton}>
                    Home
                  </button>
                </Link>
            <button className={css.navbutton} onClick={handleReturn}>
                    Return
            </button>
        </div>
    );
}

export default Header;