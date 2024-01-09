/* eslint-disable react/prop-types */
import { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

const Card = ({ onClick, selected, name, imgUrl, itemId }) => {
    const visibility = useContext(VisibilityContext);

    return (
        <div
            onClick={() => onClick(visibility)}
            style={{
                width: '260px',
            }}
            tabIndex={0}
            className="rounded-lg mx-1"
        >
            <div className="card h-52 rounded-lg shadow-lg hover:cursor-pointer">
                <img src={imgUrl} className="h-full rounded-lg" alt="" />
            </div>
            <h1 className="text-center">{name}</h1>
        </div>
    );
}

export default Card