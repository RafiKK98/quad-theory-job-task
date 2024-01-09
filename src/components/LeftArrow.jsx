import { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { FaAngleLeft } from "react-icons/fa6";

const LeftArrow = () => {
    const { initComplete, isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

    return (
        <FaAngleLeft disabled={!initComplete || (initComplete && isFirstItemVisible)} className={`text-gray-700 disabled:text-gray-300 hover:cursor-pointer`} onClick={() => scrollPrev()}>
        </FaAngleLeft>
    );
}

export default LeftArrow;