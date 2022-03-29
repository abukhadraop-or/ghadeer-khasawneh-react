import React from "react";
import { HiddenList } from "../styles/PhoneHiddenList.Styled";
import PropTypes from "prop-types";

function PhoneHiddenList(props) {
  return (
    <HiddenList isShown={props.onToggle}>
      <li>Movies</li>
      <li>TV Shows</li>
      <li>People</li>
      <li>Contribution Bible</li>
      <li>Apps</li>
      <li>Discusions</li>
      <li>Contribute</li>
      <li>API</li>
      <li>Support</li>
      <li>About</li>
      <li>Login</li>
    </HiddenList>
  );
}
PhoneHiddenList.propTypes = {
  onToggle: PropTypes.boolean,
};

export default PhoneHiddenList;
