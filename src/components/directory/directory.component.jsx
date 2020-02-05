import React from "react";
import { connect } from "react-redux";

import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

import { hideCart } from "../../redux/cart/cart-actions";

const Directory = ({ sections, dispatch }) => {
  dispatch(hideCart());
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
