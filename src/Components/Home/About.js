import img from '../../assets/1.jpg'
import img1 from '../../assets/2.jpg'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            {/* About */}
            <section className="about">
                <div className="row row-reverse-sm align-items-center m-0">
                    <div className="col-md-6 first">
                        <h3 className="mb-4" >
                            Transform your brand
                        </h3>
                        <p>
                            We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
                        </p>
                        <Link to="/" className='dark-text'> Learn More </Link>
                    </div>
                    <div className="col-md-6 p-0"
                        data-aos="fade-right"
                        data-aos-duration="1000">
                        <img src={img} width="100%" className='' />
                    </div>
                </div>
            </section>
            {/* About */}

            {/* More */}
            <section className="more">
                <div className="row align-items-center m-0">
                    <div className="col-md-6 p-0">
                        <img src={img1} width="100%" className=''
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        />
                    </div>
                    <div className="col-md-6 first">
                        <h3 className="mb-4">
                            Stand out to the right audience                        </h3>
                        <p>
                            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places
                        </p>
                        <Link to="/" className='dark-text'>Learn More </Link>
                    </div>

                </div>
            </section>
            {/* More */}

        </>
    );
}

export default About;