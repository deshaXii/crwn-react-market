import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsLoaded } from "../../redux/shop/selector";
import WithSpinner from "../../components/with-spinner/component";
import CollectionPage from "../collection/component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
