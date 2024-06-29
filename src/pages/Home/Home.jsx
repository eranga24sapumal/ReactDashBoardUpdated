
import "./home.css"
import React from "react";
import FeaturedInfo from "../../Components/featuredInfo/FeaturedInfo";
import Chart from "../../Components/Chart/Chart";
import { userData } from "../../dummyData";
import WidgetLg from "../../Components/widgetLg/WidgetLg";
import WidgetSm from "../../Components/wdgetSm/WidgetSm";


const Home =()=>{

        return(
        <div className="home">
             <FeaturedInfo/>
             <Chart data={userData} tile="User Analytics" grid dataKey="Acive User"/>
             <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
             </div>
        </div>
        
    )
}
export default Home