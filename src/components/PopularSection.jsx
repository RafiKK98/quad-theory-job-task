
const PopularSection = ({ menu }) => {

    const popularItems = menu.filter(menuItem => menuItem.IsPopular == true);

    console.log(popularItems);

    return (
        <section className="max-w-[1440px] mx-auto">
            
        </section>
    )
}

export default PopularSection