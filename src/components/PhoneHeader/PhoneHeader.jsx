import React from 'react';
import PropTypes from 'prop-types';
import { GiHamburgerMenu } from 'react-icons/gi';
import StyledPhoneHeader, {
  StyledLeftSection,
  StyledRightSection,
  StyledAvatarImage,
  StyledSearchIcon,
  StyledLogo,
} from 'components/PhoneHeader/phone-header-styles';
import Logo from 'Assets/Logo.svg';
import Avatar from 'Assets/Avatar.svg';
import SearchIcon from 'Assets/SearchIcon.svg';

/**
 * Lists phone header elements.
 *
 *  @param {Opject} props
 *  @param {function} props.sorts sorts the data.
 * * @return {JSX.element}
 */

function PhoneHeader({ onToggleHandler }) {
  return (
    <StyledPhoneHeader>
      <StyledLeftSection>
        <div>
          <GiHamburgerMenu onClick={onToggleHandler} />
        </div>
        <div>
          <StyledLogo src={Logo} alt="Logo" />
        </div>
      </StyledLeftSection>
      <StyledRightSection>
        <StyledAvatarImage src={Avatar} alt="Avatar" />
        <StyledSearchIcon src={SearchIcon} alt="Search Icon" />
      </StyledRightSection>
    </StyledPhoneHeader>
  );
}
PhoneHeader.propTypes = {
  onToggleHandler: PropTypes.func.isRequired,
};
export default PhoneHeader;
