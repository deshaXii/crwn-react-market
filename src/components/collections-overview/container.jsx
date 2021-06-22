import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionFetching } from "../../redux/shop/selector";
import CollectionOverview from "./component";
import WithSpinner from "../with-spinner/component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
