import Chart from "../../components/chart/Chart";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topBar/TopBar";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { useEffect, useState, useMemo } from "react";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import axios from "axios";
import "./home.scss";

function Home() {
    const MONTHS = useMemo(
        () => [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        []
    );

    const [userStats, setUserStats] = useState([]);

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await axios.get("/users/stats");
                const statsList = res.data.sort((a, b) => {
                    return a._id - b._id;
                })
                statsList.map((item) =>
                    setUserStats((prev) => [
                        ...prev,
                        {
                            name: MONTHS[item._id - 1],
                            "New User": item.total,
                        },
                    ])
                );
            } catch (err) {
                console.log(err);
            }
        };
        getStats();
    }, [MONTHS]);

    return (
        <>
            <TopBar />
            <div className="container">
                <Sidebar />
                <div className="home">
                <FeaturedInfo />
                <Chart
                    data={userStats}
                    title="User Analytics"
                    grid
                    dataKey="New User"
                />
                <div className="home__widget">
                    <WidgetSm />
                    <WidgetLg />
                </div>
            </div>
            </div>
        </>
    );
}

export default Home;
