import img from '../../assets/4.jpg'

const Showcase = () => {
    return (
        <>
            <section className="showcase">

                <div className="title-bg">
                    <div className="col hide-on-mobile">
                        <div className="">
                            <div className="title"

>
                                <h2 className="text-center"
                                data-aos="fade-down"
                                data-aos-duration="10000"
                                >
                                    April by Dunni
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col hide-on-tab">
                        <div className="bg-image hover-zoom ripple "
                            data-aos="zoom-in"
                            data-aos-duration="3000"
                            data-aos-delay="2000"
                        >

                            <img src={img} width="100%" className="card-img-top" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="showcase-content "
                            data-aos="fade-left"
                            data-aos-duration="3000"
                        >

                            <h1 className='py-4'>
                             Quality Over Quantity
                            </h1>
                            <p className="py-4">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo vero, vel accusantium atque ipsa minima.
                            </p>
                            <button className='btn light-bg my-4'>EXPLORE</button>
                        </div>
                    </div>


                </div>
            </section>

        </>
    );
}

export default Showcase;