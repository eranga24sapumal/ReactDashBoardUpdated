
import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import React, { PureComponent } from 'react';


const Chart =({tile,data,dataKey,grid})=>{
    return(
        <div className="chart">
          <h3 className="charttile">{tile}</h3>
          <ResponsiveContainer width="100%" aspect={4/1}>
             <LineChart data={data}>
                 <XAxis dataKey="name" stroke="#5550bd"/>
                 <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                 <Tooltip/>
                 {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
               </LineChart>
          </ResponsiveContainer>
        </div>
       
    
    )
}

export default Chart