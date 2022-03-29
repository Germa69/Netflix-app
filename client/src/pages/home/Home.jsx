import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./home.scss";

function Home({ type }) {
    return (
        <div className="home">
            <Navbar />
            <Featured type={type}/>
            <List />
        </div>
    );
}

export default Home;
