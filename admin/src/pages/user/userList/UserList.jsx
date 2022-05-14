import Sidebar from "../../../components/sidebar/Sidebar";
import TopBar from "../../../components/topBar/TopBar";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Home, RemoveRedEye } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/userContext/UserContext";
import { getUsers, deleteUser } from "../../../context/userContext/ApiCalls";

import "./userList.scss";

export default function UserList() {
    const { users, dispatch } = useContext(UserContext);

    useEffect(() => {
        getUsers(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteUser(id, dispatch);
    };

    const columns = [
        { field: "_id", headerName: "Mã", width: 300 },
        {
            field: "user",
            headerName: "Tên người dùng",
            width: 300,
            renderCell: (params) => {
                return (
                    <div className="userList__item">
                        <img
                            className="userList__img"
                            src={params.row.avatar}
                            alt=""
                        />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 300 },
        {
            field: "action",
            headerName: "Hành động",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link
                            to={"/user/" + params.row._id}
                            state={{ user: params.row }}
                        >
                            <button className="userList__show">
                                <RemoveRedEye />
                            </button>
                        </Link>
                        <DeleteOutline
                            className="userList__delete"
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <>
            <TopBar />
            <div className="container">
                <Sidebar />
                <div className="userList">
                    <ul id="breadcrumbs">
                        <li>
                            <Link to="/" >
                                <Home />
                            </Link>
                        </li>
                        <li>
                            <span className="current">
                                Danh sách người dùng
                            </span>
                        </li>
                    </ul>

                    <DataGrid
                        rows={users}
                        disableSelectionOnClick
                        columns={columns}
                        pageSize={8}
                        checkboxSelection
                        getRowId={(r) => r._id}
                    />
                </div>
            </div>
        </>
    );
}
