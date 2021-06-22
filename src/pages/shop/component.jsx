import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'

import CollectionOverview from "../../components/collections-overview/component";
import CollectionPage from "../collection/component";
import WithSpinner from "../../components/with-spinner/component";

import { fetchCollectionsStartAsync } from "../../redux/shop/actions";
import { selectCollectionFetching } from '../../redux/shop/selector'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }
  render() {
    const { match, isCollectionsFetching } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isCollectionsFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={isCollectionsFetching} {...props} />
          )}
        />
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  isCollectionsFetching: selectCollectionFetching
})
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
