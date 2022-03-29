import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useState, useEffect } from "react";
import axios from "axios"
import "./home.scss";

function Home({ type }) {

    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `lists${type ? "?type=" + type : ""}${
                        genre ? "&genre=" + genre : ""
                    }`,
                    {
                        headers: {
                            token:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2MzN2FlZjMyZTE1ZWM1NmQ0ZTRhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODU3OTA3MCwiZXhwIjoxNjQ5MDExMDcwfQ.TqEMzLpqfnQ00Mv0sKw1RNvrqnDXaZFm3Tl28yw0EcE",
                        },
                    }
                )
                setLists(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomLists();
    }, [type, genre]);

    return (
        <div className="home">
            <Navbar />
            <Featured type={type} setGenre={setGenre} />
            {lists.map((list, index) => (
                <List key={index} list={list} />
            ))}
        </div>
    );
}

export default Home;
