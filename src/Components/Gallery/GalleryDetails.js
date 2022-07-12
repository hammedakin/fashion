import { useState } from 'react';

import img from '../../assets/5.jpg'
import img1 from '../../assets/2.jpg'
import img2 from '../../assets/3.jpg'
import { useNavigate } from 'react-router-dom'
import Modal from './Modal';


const gallery = [
    { image: img },
    { image: img1 },
    { image: img2 },
    { image: img },
    { image: img1 },
    { image: img2 },
]




const GalleryDetails = () => {

    const [showModal, setshowModal] = useState(false);
    const [modalImage, setmodalImage] = useState('');
    let navigate = useNavigate()


    // To Go Back
    function back() {
        navigate('/gallery')
    }
    // To Go Back

    // To Open Modal
    function openModal(image) {
        setshowModal(true)
        setmodalImage(image)

    }
    // To Open Modal
    return (
        <div>
            <main className="gallery-details">
                <Modal showModal={showModal} setshowModal={setshowModal} image={modalImage} images={gallery} />
                <div className="container">
                    <a onClick={back}>
                        <i className='bi bi-home h1' />back
                    </a>

                    <div className="mt-5 text-center">
                        <div className="pry-border mx-auto title">
                            <h4 className="m-0 ">
                                I am Title
                            </h4>
                        </div>
                        <div className="col-md-8 mx-auto">
                            <h6 className="mt-4 lh-base">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium et est quo, provident eum voluptates enim.
                            </h6>
                        </div>
                    </div>

                    <h6>
                        Click Image to Enlarge
                    </h6>
                    <div className="row">
                        {gallery.map(({ image }, i) => {
                            return (
                                <>
                                    <div className="col-md-4 my-4 col-6">
                                        <div className="card h-100">
                                            <div className=" bg hover-overlay hover-zoom hover-shado ripple" onClick={(e) => openModal(image)}>
                                                <img src={image} class="card-img-top " width={"100%"} />
                                            </div>
                                        </div>
                                    </div>



                                </>
                            )
                        })}
                    </div>

                </div>

            </main>
        </div>
    );
}

export default GalleryDetails;