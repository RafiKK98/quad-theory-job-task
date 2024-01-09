import { useContext } from "react"
import { VisibilityContext } from "react-horizontal-scrolling-menu"
import { FaAngleRight } from "react-icons/fa6";

const RightArrow = () => {
    const { initComplete, isLastItemVisible, scrollNext } = useContext(VisibilityContext);

    return (
        <FaAngleRight disabled={initComplete && isLastItemVisible} className={`text-gray-700 disabled:text-gray-300 hover:cursor-pointer`} onClick={() => scrollNext()}>
        </FaAngleRight>
    )
}

export default RightArrow