import React ,{component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
export { AutosuggestElement } from "../../ui-kit";
import { getProductType } from "../../actions";


class DashboardFilter extends component{
    constructor(props){
        super(props)
        this.state = {};
    }

render()
{
  const { products } = this.props;

  return (
    <div className="left-filters">
      <AutosuggestElement
        suggestionValues={products}
        placeholder="Select Product"
        onChange={this.handelChange}
      />
      <button
        type="button"
        className="btn btn-info"
        onClick={this.handleApplyClick}
      >
        <i className="fa fa-search" />
      </button>
    </div>
  );
}

componentDidMount = () => {
  this.props.getProductType();
};
handelChange = filterData => {
  this.setState({ filterData });
};

handleApplyClick = () => {
  const { filterData } = this.state;
  if (
    filterData &&
    filterData.suggestions.length !== 0 &&
    filterData.suggestions[0].name
  ) 
  {
    this.props.handleApplyClick(filterData.suggestions[0].name);
    } 
  };
}

DashboardFilter.PropTypes={
    handleApplyClick: PropTypes.func.isRequired,
    getProductType: PropTypes.func.isRequired,
    products: PropTypes.any
};
const mapStateToProps = state => ({
  products: state.productData.products
});

const mapDispatchToProps = {
  getProductType
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardFilter);