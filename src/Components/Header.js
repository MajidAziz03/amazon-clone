import React from "react";
import logo from "../images/logiii.webp";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';


function Header() {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="" />
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header-nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Salam MAjid!
                    </span>
                    <span className="header__optionLineTwo" >
                        Signin </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns&
                    </span>
                    <span className="header__optionLineTwo" >
                     Orders </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo" >
                        Prime  </span>
                </div>
            </div>
        </div>
    );
}

export default Header;
