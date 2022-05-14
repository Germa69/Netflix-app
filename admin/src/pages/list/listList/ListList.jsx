import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Home, AddOutlined } from "@material-ui/icons";
import Sidebar from "../../../components/sidebar/Sidebar";
import TopBar from "../../../components/topBar/TopBar";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ListContext } from "../../../context/listContext/ListContext";
import { getLists, deleteList } from "../../../context/listContext/ApiCalls";
import "./listList.scss";

export default function ListList() {
    const { lists, dispatch } = useContext(ListContext);
    let navigate = useNavigate();

    useEffect(() => {
        getLists(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteList(id, dispatch);
    };

    const handleRedirectAdd = () => {
        navigate('/list/add');
    }


    const columns = [
        { field: "_id", headerName: "Mã", width: 350 },
        {
            field: "title",
            headerName: "Tiêu đề",
            width: 350,
        },
        {
            field: "genre",
            headerName: "Thể loại",
            width: 150,
        },
        {
            field: "type",
            headerName: "Loại",
            width: 150,
        },
        {
            field: "action",
            headerName: "Hành động",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link
                            to={"/list/" + params.row._id}
                            state={{ list: params.row }}
                        >
                            <button className="listList__edit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="listList__delete"
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
                <div className="listList">
                <div className="wrapped">

                    <ul id="breadcrumbs">
                        <li>
                            <Link to="/">
                                <Home />
                            </Link>
                        </li>
                        <li>
                            <span className="current">
                                Danh sách thể loại
                            </span>
                        </li>
                    </ul>

                    <button className="listList__btn" onClick={handleRedirectAdd}>
                            <AddOutlined /> 
                            Thêm
                        </button>
                </div>

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
