/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Card from "./Card";
import { useState } from "react";
import 'react-horizontal-scrolling-menu/dist/styles.css';
import Arrows from "./Arrows";
import generateRandomString from "../utils/generateRandomString";
import Swal from "sweetalert2";

const PopularSection = ({ menu, setMenu }) => {

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

    const addMoreBtn = () => {
        document.getElementById('my_modal_1').showModal();
    }

    const addItem = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = parseFloat(form.price.value);
        const imageUrl = form.imageUrl.value;
        console.log(name, price, imageUrl);
        setMenu([...popularItems, {
            Id: generateRandomString,
            Name: name,
            Price: price,
            ImageUrl: imageUrl,
            IsPopular: true,
            IsRecommended: true
        }])
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item added!",
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        <>
            <section className="max-w-[1440px] mx-auto my-10">
                <div className="flex justify-between">
                    <h1 className="text-xl font-bold lg:font-medium">Popular </h1>
                </div>
                <ScrollMenu Header={Arrows({addMoreBtn: addMoreBtn})}>
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
            <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-xl">Add a new Item</h3>
                    <form onSubmit={addItem} className="flex items-end gap-2 sm:flex-col sm:items-start">
                        <div className="w-full">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text font-normal">Item name?</span>
                                </div>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered w-full max-w-xs" />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text font-normal">Price?</span>
                                </div>
                                <input type="text" placeholder="Price" name="price" className="input input-bordered w-full max-w-xs" />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text font-normal">Image URL?</span>
                                </div>
                                <input type="url" placeholder="Image URL" name="imageUrl" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                        <div className="w-full">
                            <input type="submit" className="btn btn-warning text-gray-100 w-full sm:w-auto" value="Add Item" />
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default PopularSection