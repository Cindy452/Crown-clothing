import React, { useContext } from "react";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";
import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIconContainer,
} from "./cart-icon.styles";
import CartContext from "../../contexts/cart/cart.context";

const CartIcon = ({ itemCount }) => {
    const {toggleHidden} = useContext(CartContext);
  return (
    <CartIconContainer onClick={toggleHidden}>
      <ShoppingIconContainer />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
