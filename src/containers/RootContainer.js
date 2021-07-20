import { Component } from "react";
import {Header,Footer} from "../componants/common"


class RootContainer extends Component{
    constructor(props,contex){
        super(props,contex);
        // this.state ={
        //     carts : carData.carts
        // };
    }
    render(){
        // const {carData}=this.props;
        return  (
            <div>
            <header>
                <Header />
                <Footer />
            </header>
            </div>
        // <div>
        //     <Header carData={carData} handleApplyClick={this.getfilter} /> 
        //     <DashboardRoutes
        //         items={items}
        //         carts={carData.carts}
              

        //     />
        // </div>
        );
        
    }

}
// getFilter = filterData =>{
//     const itemData=product.filter(i=>i.type ===filterData);
//     this.props.getItems(itemData);
// }

export default RootContainer;