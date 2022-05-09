import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Home } from "@material-ui/icons";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topBar/TopBar";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { getLists, deleteList } from "../../context/listContext/ApiCalls";
import "./listList.scss";

export default function ListList() {
    const { lists, dispatch } = useContext(ListContext);

    useEffect(() => {
        getLists(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteList(id, dispatch);
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 350 },
        {
            field: "title",
            headerName: "Title",
            width: 350,
        },
        {
            field: "genre",
            headerName: "Genre",
            width: 150,
        },
        {
            field: "type",
            headerName: "Type",
            width: 150,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link
                            to={"/list/" + params.row._id}
                            state={{ list: params.row }}
                        >
                            <button className="productList__edit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="productList__delete"
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
                <div className="productList">
                    <ul id="breadcrumbs">
                        <li>
                            <Link to="/">
                                <Home />
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="current">
                                Current crumb
                            </Link>
                        </li>
                    </ul>

                    <DataGrid
                        rows={lists}
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
