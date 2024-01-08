
const RecommendedSection = ({ menu }) => {

    const recommendedItems = menu.filter(menuItem => menuItem.IsRecommended == true);

    console.log(recommendedItems);

    return (
        <section className="max-w-[1440px] mx-auto">
            
        </section>
    )
}

export default RecommendedSection