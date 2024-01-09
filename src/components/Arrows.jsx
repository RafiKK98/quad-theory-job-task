/* eslint-disable react/prop-types */
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const Arrows = ({ addMoreBtn }) => (
    <div className="w-full flex justify-end items-center mb-2" >
        <button className="text-[#fd6110] font-medium hover:cursor-pointer" onClick={addMoreBtn}>Add More</button>
        <div className="ml-2 flex gap-2">
            <LeftArrow /> <RightArrow />
        </div>
    </div>
);

export default Arrows;