import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Home } from "@material-ui/icons";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topBar/TopBar";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMovies, deleteMovie } from "../../context/movieContext/ApiCalls";
import "./productList.scss";

export default function ProductList() {
    const { movies, dispatch } = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteMovie(id, dispatch);
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 90 },
        {
            field: "movie",
            headerName: "Movie",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productList__item">
                        <img
                            className="productList__img"
                            src={params.row.image}
                            alt=""
                        />
                        {params.row.title}
                    </div>
                );
            },
        },
        {
            field: "genre",
            headerName: "Genre",
            width: 120,
        },
        {
            field: "year",
            headerName: "Year",
            width: 120,
        },
        {
            field: "limit",
            headerName: "Limit",
            width: 120,
        },
        {
            field: "isSeries",
            headerName: "isSeries",
            width: 120,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link
                            to={"/movie/" + params.row._id}
                            state={{ movie: params.row }}
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
                        rows={movies}
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
