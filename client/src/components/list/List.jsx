import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

function List() {

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);

        let distance = listRef.current.getBoundingClientRect().x - 50;

        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }

        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    };

    return (
        <div className="list">
            <span className="list__title">Supperman</span>
            <div className="wrapper">
            <ArrowBackIosOutlined
                className="slider__arrow left"
                onClick={() => handleClick("left")}
                style={{ display: !isMoved && "none" }}
            />
            <div className="slider__container" ref={listRef}>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
            <ArrowForwardIosOutlined
                className="slider__arrow right"
                onClick={() => handleClick("right")}
            />
            </div>
        </div>
    );
}

export default List;