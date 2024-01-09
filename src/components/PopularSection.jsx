/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Card from "./Card";
import { useState } from "react";
import 'react-horizontal-scrolling-menu/dist/styles.css';
import Arrows from "./Arrows";

const PopularSection = ({ menu }) => {

    const popularItems = menu.filter(menuItem => menuItem.IsPopular == true);

    console.log(popularItems);

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
            <h1 className="text-xl font-bold lg:font-medium">Popular </h1>
            <ScrollMenu Header={Arrows}>
                {
                    popularItems.map((item) => (
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

export default PopularSection