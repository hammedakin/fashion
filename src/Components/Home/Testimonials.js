import img from '../../assets/image-emily.jpg'
import img1 from '../../assets/image-jennie.jpg'
import img2 from '../../assets/image-thomas.jpg'

const Testimonials = () => {
    return (
        <>
            <section className="testimonials">
                <div className="container">
                    <div className="mb-5 text-center">
                        <h3>
                            CLIENTS TESTIMONIALS
                        </h3>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-md-4 mb-5">
                            <div className="card text-center transparent shadow-none">
                                <img src={img} width="15%" className="br-lg mx-auto" />
                                <p className="small mt-5">
                                    We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                                </p>

                                <div className="mt-4">
                                    <h6 className='p-0 m-0'>
                                        Emily R.
                                    </h6>
                                    <small>Marketing</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="card text-center transparent shadow-none">
                                <img src={img} width="15%" className="br-lg mx-auto" />
                                <p className="small mt-5">
                                Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience
                                </p>

                                <div className="mt-4">
                                    <h6 className='p-0 m-0'>
                                        Thomas F.
                                    </h6>
                                    <small>Chief Operating Officer </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="card text-center transparent shadow-none">
                                <img src={img} width="15%" className="br-lg mx-auto" />
                                <p className="small mt-5">
                                Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                                </p>

                                <div className="mt-4">
                                    <h6 className='p-0 m-0'>
                                        Jennie R.
                                    </h6>
                                    <small>Business Owner </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonials;