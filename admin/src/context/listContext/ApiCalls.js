import axios from "axios";
import {
    getListsStart,
    getListsSuccess,
    getListsFailure,
    createListStart,
    createListSuccess,
    createListFailure,
    deleteListStart,
    deleteListSuccess,
    deleteListFailure
} from "./ListActions";

export const getLists = async (dispatch) => {
    dispatch(getListsStart());

    try {
        const res = await axios.get("/lists", {
            headers: {
                token:
                    "Bearer " +
                    JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getListsSuccess(res.data));
    } catch (err) {
        dispatch(getListsFailure(err));
    }
};

export const createList = async (list, dispatch) => {
    dispatch(createListStart());

    try {
        const res = await axios.post("/lists", list, {
            headers: {
                token:
                    "Bearer " +
                    JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createListSuccess(res.data));
    } catch (err) {
        dispatch(createListFailure(err));
    }
};

export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart());

    try {
        await axios.delete("/lists/" + id, {
            headers: {
                token:
                    "Bearer " +
                    JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deleteListSuccess(id));
    } catch (err) {
        dispatch(deleteListFailure(err));
    }
};
