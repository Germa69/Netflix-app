import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";

function Home({ type }) {
    return (
        <div className="home">
            <Navbar />
            <Featured type={type}/>
        </div>
    );
}

export default Home;
