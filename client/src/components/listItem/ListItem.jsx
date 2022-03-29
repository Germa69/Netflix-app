import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import "./listItem.scss";

function ListItem() {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <div
        className="listItem"
        style={{ left: isHovered }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src="http://icdn.dantri.com.vn/zoom/1200_630/2016/img20160519213448746-crop-1463670229519.jpg" alt="" className="listItem__img"/>
        {isHovered && (
          <>
            <video className="listItem__video" src="https://youtu.be/T6DJcgm3wNY" autoPlay={true} loop />
            <div className="item__info">
              <div className="item__info-icons">
                <PlayArrow className="item__icon" />
                <Add className="item__icon" />
                <ThumbUpAltOutlined className="item__icon" />
                <ThumbDownOutlined className="item__icon" />
              </div>
              <div className="item__info-timers">
                <span className="item__timer">152</span>
                <span className="item__timer limit">+16</span>
                <span className="item__timer">2000</span>
              </div>
              <div className="item__info-desc">Test Desc</div>
              <div className="item__info-genre">comdy</div>
            </div>
          </>
        )}
      </div>
  );
}

export default ListItem;
