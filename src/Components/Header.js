import React from "react";
import logo from "../images/logiii.webp";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to='/'> <img className="header__logo" src={logo} alt="" /> </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header-nav">
                <Link to='/login'>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Salam MAjid!
                    </span>
                    <span className="header__optionLineTwo" >
                        Signin </span>
                    </div>
                </Link>
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
                        Prime
                    </span>
                </div>
                <Link to='/checkout'>
                    <div className="header__optionBasket">
                        <ShoppingCartIcon className="cart" />
                        <span className="header__optionLineTwo header__optionBastCount">0</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
