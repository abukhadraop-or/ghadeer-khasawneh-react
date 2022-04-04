import React from "react";
import PropTypes from "prop-types";
import HiddenList, {StyledItem} from "components/PhoneHiddenList/phone-hidden-list-styles";

 /**
 * Lists phone hidden list elements
 * * @return {JSX.element}
 */

function PhoneHiddenList({onToggle}) {
  return (
    <HiddenList isShown={onToggle}>
      <StyledItem>Movies</StyledItem>
      <StyledItem>TV Shows</StyledItem>
      <StyledItem>People</StyledItem>
      <StyledItem>Contribution Bible</StyledItem>
      <StyledItem>Apps</StyledItem>
      <StyledItem>Discusions</StyledItem>
      <StyledItem>Contribute</StyledItem>
      <StyledItem>API</StyledItem>
      <StyledItem>Support</StyledItem>
      <StyledItem>About</StyledItem>
      <StyledItem>Login</StyledItem>
    </HiddenList>
  );
}
PhoneHiddenList.propTypes = {
  onToggle: PropTypes.bool.isRequired,
};

export default PhoneHiddenList;
