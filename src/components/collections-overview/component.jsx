import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { PreviewCollection } from "../collection-preview/component";

import { selectCollectionsForPreview } from "../../redux/shop/selector";

import "./style.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherState }) => (
      <PreviewCollection key={id} {...otherState} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
