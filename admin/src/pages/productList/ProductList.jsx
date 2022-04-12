import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Home } from "@material-ui/icons";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topBar/TopBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { productRows } from "../../dummyData";
import "./productList.scss";

export default function ProductList() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productList__item">
                        <img
                            className="productList__img"
                            src={params.row.img}
                            alt=""
                        />
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "price",
            headerName: "Price",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productList__edit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="productList__delete"
                            onClick={() => handleDelete(params.row.id)}
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
                        rows={data}
                        disableSelectionOnClick
                        columns={columns}
                        pageSize={8}
                        checkboxSelection
                    />
                </div>
            </div>
        </>
    );
}
