import Sidebar from "../../../components/sidebar/Sidebar";
import TopBar from "../../../components/topBar/TopBar";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Home, AddOutlined, Edit } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../../context/movieContext/MovieContext";
import { getMovies, deleteMovie } from "../../../context/movieContext/ApiCalls";
import "./movieList.scss";

export default function ProductList() {
    const { movies, dispatch } = useContext(MovieContext);
    let navigate = useNavigate();

    useEffect(() => {
        getMovies(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteMovie(id, dispatch);
    };

    const handleRedirectAdd = () => {
        navigate("/movie/add");
    };

    const columns = [
        { field: "_id", headerName: "Mã", width: 200 },
        {
            field: "movie",
            headerName: "Tên phim",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="movieList__item">
                        <img
                            className="movieList__img"
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
            headerName: "Thể loại",
            width: 130,
        },
        {
            field: "year",
            headerName: "Năm xuất bản",
            width: 180,
        },
        {
            field: "limit",
            headerName: "Độ dài",
            width: 120,
        },
        {
            field: "isSeries",
            headerName: "isSeries",
            width: 140,
            renderCell: (params) => {
                return (
                    <div className="movieList__item">
                        {params.row.isSeries ? 'Movies' : 'Series'}
                    </div>
                );
            },
        },
        {
            field: "action",
            headerName: "Hành động",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link
                            to={"/movie/" + params.row._id}
                            state={{ movie: params.row }}
                        >
                            <button className="movieList__edit">
                                <Edit />
                            </button>
                        </Link>
                        <DeleteOutline
                            className="movieList__delete"
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
                <div className="movieList">
                    <div className="wrapped">
                        <ul id="breadcrumbs">
                            <li>
                                <Link to="/">
                                    <Home />
                                </Link>
                            </li>
                            <li>
                                <span className="current">Danh sách phim</span>
                            </li>
                        </ul>

                        <button
                            className="movieList__btn"
                            onClick={handleRedirectAdd}
                        >
                            <AddOutlined />
                            Thêm
                        </button>
                    </div>

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
