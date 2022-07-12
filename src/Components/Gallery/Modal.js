import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const Modal = ({ showModal, setshowModal, image, images }) => {
    const backdrop = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }
    const modal = {
        hidden: {
            y: '-100vh',
            opacity: 0
        },
        visible: {
            y: '50px',
            opacity: 1,
            transition: { delay: 0.5 }
        },
    }

    const [currentImage, setcurrentImage] = useState(image);

    function chnageImage(image) {
        setcurrentImage(image)
    }
    function closeModal(image) {
        setcurrentImage('')
        setshowModal(false)
    }
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div className='backdrop'
                    variants={backdrop}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                >
                    <div className="mx-auto text-center mt-5">
                        <i
                            className='bi bi-x pry-text py-2 px-2 border border-pry border-2 rounded-circle'
                            onClick={(e) => closeModal()}

                        />
                    </div>
                    <div className="container d-flex align-items-cente">
                        <motion.div className="col-9"
                            variants={modal}
                        >
                            <div className="image-modal">
                                <img src={!currentImage ? image : currentImage}
                                    alt="" width={"100%"} />
                            </div>

                        </motion.div>
 
                        <div className="col-3 image-pag">
                            {images.map(({ image }, i) => {
                                return (
                                    <>
                                        <div className="col-3 mt-2 mx-auto">
                                            <div className=""
                                            >
                                                <img src={image} class="br-sm" width={"100%"}
                                                    onClick={(e) => chnageImage(image)}

                                                />
                                            </div>
                                        </div>
                                   </>
                                )
                            })}
                        </div>

                    </div>

                </motion.div>
            )

            }
        </AnimatePresence>
    );
}

export default Modal;