/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Arrows from "./Arrows";
import { useState } from "react";
import Card from "./Card";

const RecommendedSection = ({ menu }) => {

    const recommendedItems = menu.filter(menuItem => menuItem.IsRecommended == true);

    console.log(recommendedItems);

    const [selected, setSelected] = useState([]);
    
    const isItemSelected = (id) => !!selected.find((el) => el === id);

    const handleClick = (id) => ({ getItemById, scrollToItem }) => {
        const itemSelected = isItemSelected(id);

        setSelected((currentSelected) =>
            itemSelected
            ? currentSelected.filter((el) => el !== id)
            : currentSelected.concat(id)
        );
    };
    return (
        <section className="max-w-[1440px] mx-auto my-10">
            <h1 className="text-xl font-bold lg:font-medium">Recommended </h1>
            <ScrollMenu Header={Arrows}>
                {
                    recommendedItems.map((item) => (
                        <Card  
                            itemId={item.Id}
                            key={item.Id}
                            name={item.Name}
                            imgUrl={item.ImageUrl}
                            onClick={handleClick(item.Id)}
                            selected={isItemSelected(item.Id)}
                        />
                    ))
                }
            </ScrollMenu>
        </section>
    )
}

export default RecommendedSection