import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
const FeaturedInfo =()=>{

    return(
        <div className="featured">
           <div className="featuredItem">
                 <span className="featuredTitle">Revanue</span>
                    <div className="featuredContainer">
                        <span className="featuredMoney">$25,3414</span>
                        <span className="featuredMoneyRate">
                            - 8.7<ArrowDownward className="featuredIcon negative"/>
                        </span>
                    </div>
                    <span className="featuredSub">Compared to last month</span>
           </div>
           <div className="featuredItem">
                 <span className="featuredTitle">sales</span>
                    <div className="featuredContainer">
                        <span className="featuredMoney">$130,3414</span>
                        <span className="featuredMoneyRate">
                            - 8.7<ArrowDownward className="featuredIcon negative"/>
                        </span>
                    </div>
                    <span className="featuredSub">Compared to last month</span>
           </div>
           <div className="featuredItem">
                 <span className="featuredTitle">Cost</span>
                    <div className="featuredContainer">
                        <span className="featuredMoney">$34,500</span>
                        <span className="featuredMoneyRate">
                            + 12.8<ArrowUpward className="featuredIcon"/>
                        </span>
                    </div>
                    <span className="featuredSub">Compared to last month</span>
           </div>
        </div>
    )
}

export default FeaturedInfo