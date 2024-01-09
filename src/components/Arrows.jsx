/* eslint-disable react/prop-types */
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const Arrows = ({ AddMore }) => (
    <div className="w-full flex justify-end items-center mb-2" >
        <h2 className="text-[#fd6110] font-medium hover:cursor-pointer" onClick={AddMore}>Add More</h2>
        <div className="ml-2 flex gap-2">
            <LeftArrow /> <RightArrow />
        </div>
    </div>
);

export default Arrows;