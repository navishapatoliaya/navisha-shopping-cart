import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import * as routes from "../lib/constants";
import DashboardFilter from "../components/common/DashboardFilter";

class LeftSideBar extends Component {
  render() {
    return (
      <div>
        <Route
          path={routes.ROOT_ROUTE}
          exact
          component={this.handleDashboardFilter}
        />
        <Route
          path={routes.ITEMS_ROUTE}
          exact
          component={this.handleDashboardFilter}
        />
        {/* <Route path={routes.ITEM_ROUTE} exact component={this.handleDashboardFilter} /> */}
      </div>
    );
  }

  handleDashboardFilter = () => {
    const { handleApplyClick } = this.props;
    return <DashboardFilter handleApplyClick={handleApplyClick} />;
  };
}

LeftSideBar.propTypes = {
  handleApplyClick: PropTypes.func.isRequired
};

export default LeftSideBar;
