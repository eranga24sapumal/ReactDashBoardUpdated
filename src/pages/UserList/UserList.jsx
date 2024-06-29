import "./userList.css"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import {UserRows} from "../../dummyData"
import { Link } from "react-router-dom"
import {useEffect, useState} from "react";

  


const UserList =()=>{
 
const[data,setData] = useState(UserRows);

const handlerdelete=(id)=>{
  console.log(id);
  setData(data.filter((item)=>item.id != id))
};

//useEffect(()=>{console.log(data);},[data])

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'username', headerName: 'User', width: 200,renderCell:(params)=>{
        return(
            <div className="userlistUser">
                <img className="userlistImage" src={params.row.avatar} alt=""/>
                {params.row.username}
            </div>
        )
    } },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'status',
      width: 90,
    },
    {
        field: 'trasaction',
        headerName: 'Tasaction',
        width: 90,
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell:(params)=>{
            return(
                <>
                <Link to={"/user/"+ params.row.id}>
                  <button className="usrelistEdit">Edit</button>
                </Link>
                  <DeleteOutline className="usrelistDelete" OnClick={(e)=>{handlerdelete(params.row.id);console.log(params);}}/>
                  <button className="usrelistDelete" onClick={()=>handlerdelete(params.row.id)}>del</button>
                </>
                
            )
        }
    },
  ];


    return(
    <div className="userlist">
         <DataGrid
        rows={data}
        //disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>

    )
}



export default UserList