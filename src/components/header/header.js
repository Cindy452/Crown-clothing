import React, { useContext, useState } from "react";
import { auth } from "../../firebase/firebase.util";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionDiv,
  OptionsContainer,
} from "./header.styles";
import CurrentUserContext from "../../contexts/current-user/current-user.context";
import CartContext from "../../contexts/cart/cart.context";

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/shop">Contact</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv>
        ) : (
          <OptionLink to="/signin">Sign In</OptionLink>
        )}
        <CartContext.Provider value={{hidden, toggleHidden}}>
          <CartIcon />
        </CartContext.Provider>
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
