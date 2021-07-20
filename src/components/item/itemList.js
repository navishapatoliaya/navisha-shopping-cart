import React from "react";
import PropTypes from "prop-types";
import { Select, Button, Label } from "../../ui-kit";
import { Link } from "react-router-dom";
import { Item } from "./";
// import * as routes from "../../lib/constants";
// import { propTypes } from "react-bootstrap/esm/Image";

const sortOption=[
    {
        name:"Name",
        value:"Name"
    },
    {
        name:"Price",
        value:"Price"
    },
    {
        name: "Quantity",
        value: "Quantity"
    },
    {
        name: "Popularity",
        value: "Popularity"
    }

];
const handleSelect =()=>{};
const handleRenderItemList=(
        items,
        handleAddToCart,
        handleRemoveToCart,
        isCart

)=>{
    return(
        <div className="testClass">
            {
                <div className="form-group" id="productListSort">
                <Label htmlfor="Sort By" value="Sort By"/>
                <Select
                    options={sortOptions}
                    className="form-control"
                    id="productListSortBy"
                    onChange={handleSelect}
                />
                </div>
            }
            <div className="row">
                {items.map(item=>{
                    return(
                        <div className="col-sm-3"  key={item.id}>
                            <div className="card">
                                <div className="card-body">
                                    <Link to={'${routes.BASE_ITEM_ROUTES}${item.id}'}>
                                        <Item item={item} />
                                    </Link>
                                    <Button
                                        type="button"
                                        className="btn btn-info"
                                        text={isCart ? "Remove to cart":"Add to cart"}
                                        id={item.id}
                                        onClick={isCart ? handleRemoveToCart : handleAddToCart}
                                    />
                                </div>
                             </div>
                        </div>   
                    );
                })}
            </div>
        </div>
    );

};
const ItemList=({items,handleAddToCart,handleRemoveToCart,is})=>{
    return(
        <div>
            {items &&
                handleRenderItemList(
                items,
                handleAddToCart,
                handleRemoveToCart,
                isCart

                )}
             {!items && <p>No Data found to display</p>}   
    
        </div>
    );
};
ItemList.PropTypes={
    items:PropTypes.any,
    handleAddToCart:PropTypes.func,
    handleRemoveToCart:PropTypes.func,
    isCart:PropTypes.bool.isRequired
};
export default ItemList;