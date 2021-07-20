import React ,{component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { render } from "@testing-library/react";

class DashboardFilter extends component{
    constructor(props){
        super(props)
        this.state = {};
    }
}
render()
{
    return(
        <div>
        <button
          type="button"
          className="btn btn-info"
          onClick={this.handleApplyClick}
        >
          <i className="fa fa-search" />
        </button>
        </div>
        handleApplyClick = () => {
            const { filterData } = this.state;
            if (
              filterData &&
              filterData.suggestions.length !== 0 &&
              filterData.suggestions[0].name
            ) {
              this.props.handleApplyClick(filterData.suggestions[0].name);
            }
    )
}
DashboardFilter.PropTypes={
    handleApplyClick: PropTypes.func.isRequired
}
export default DashboardFilter;