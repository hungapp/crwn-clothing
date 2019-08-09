import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { signOutStart } from '../../redux/user/user.actions';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {
  HeaderContainers,
  LogoContainer,
  OptionLink,
  OptionsContainer
} from './header.styles';

import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser, hidden, signOut }) => (
  <HeaderContainers>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOut}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainers>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
