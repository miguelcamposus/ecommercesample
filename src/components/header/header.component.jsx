import React from 'react'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from  '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv} from './header.styles';


const Header = ({currentUser, hidden}) =>(
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className = 'logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to = '/shop'>Shop</OptionLink>
            <OptionLink to= '/contact'>Contact</OptionLink>
            {
            currentUser ?
            <OptionDiv onClick= {()=> auth.signOut()}>Sign Out</OptionDiv>
            :
            <OptionLink to='/signin'>Sign In</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {hidden ? null:
            <CartDropDown/>
            }
    </HeaderContainer>
)
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);