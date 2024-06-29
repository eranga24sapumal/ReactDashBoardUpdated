

import "./widgetLg.css"

const Button =({Type})=>{
 return<button className={"widgetLgButton "+ Type}>{Type}</button>
}
const WidgetLg =()=>{

    return(
    <div className="widgetLg">
        <h3 className="wdgetLgTitle">Latest Trasaction</h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amout</th>
                <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img 
                       src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                       alt="" 
                       className="widgetLgImg"
                    />
                    <span className="widgetLgName">ABCD fg</span>
                </td>
                <td className="widgetLgDate"> 12 Jan 2020</td>
                <td className="widgetLgAmount"> $20000</td>
                <td className="widgetLgstatus"> 
                    <Button Type="Approved"/>
                </td>
             </tr>
             <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img 
                       src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                       alt="" 
                       className="widgetLgImg"
                    />
                    <span className="widgetLgName">ABCD fg</span>
                </td>
                <td className="widgetLgDate"> 12 Jan 2020</td>
                <td className="widgetLgAmount"> $20000</td>
                <td className="widgetLgstatus"> 
                    <Button Type="Declined"/>
                </td>
             </tr>
             <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img 
                       src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                       alt="" 
                       className="widgetLgImg"
                    />
                    <span className="widgetLgName">ABCD fg</span>
                </td>
                <td className="widgetLgDate"> 12 Jan 2020</td>
                <td className="widgetLgAmount"> $20000</td>
                <td className="widgetLgstatus"> 
                    <Button Type="Pending"/>
                </td>
             </tr>
             <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img 
                       src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                       alt="" 
                       className="widgetLgImg"
                    />
                    <span className="widgetLgName">ABCD fg</span>
                </td>
                <td className="widgetLgDate"> 12 Jan 2020</td>
                <td className="widgetLgAmount"> $20000</td>
                <td className="widgetLgstatus"> 
                    <Button Type="Pending"/>
                </td>
             </tr>
            
        </table>
    </div>
    
)
}
export default WidgetLg
