import React from "react";
import MenuItem from "../../components/menu-item/component";

import { createStructuredSelector } from 'reselect'

import { selectDirectorySection } from "../../redux/directory/selector";

import {connect} from 'react-redux'

import "./style.scss";

const Directory = ({sections}) => (
  <div className="directory-menu">
    {
        sections.map(({id, ...otherProps}) => (
            <MenuItem key={id} {...otherProps}  />
        ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory)