import bannerImg from "../assets/img/Image1.png";

const Banner = () => {
    return (
        <section className="max-w-[1440px] mx-auto lg:bg-[#f89f1d] rounded-3xl">
            <div className="flex flex-col lg:gap-0 lg:flex-row justify-between mx-3 lg:mx-0 lg:px-20 relative">
                <div className="flex flex-col gap-3 justify-center items-center text-[#10263d] text-center lg:text-start lg:items-start lg:text-[#fffeff]">
                    <h1 className="text-4xl lg:text-5xl font-bold">Deliver Food To Your Door Step|</h1>
                    <p className="text-xl lg:text-2xl">Authentic Food|, Quick Service, Fast Delivery</p>
                </div>
                {/* <figure className="h-3/4 rounded-3xl bg-[#fd9460] lg:bg-inherit"> */}
                <img src={bannerImg} className="z-[1]" alt="" />
                {/* </figure> */}
                <div className="absolute rounded-3xl h-1/2 w-full bottom-0 -z-0 bg-[#fd9460] lg:hidden">
                </div>
            </div>
        </section>
    )
}

export default Banner