import React from 'react';
import img from '../../assets/8.jpg'


const AboutMe = () => {
    return (
        <>
        <div className="container">
            <div className="about-me text-center">
                <div className="row">
                    <div className="col-md-5">

                        <img src={img} width='50%' className='br-md my-5' />
                    </div>
                    <div className="col-md-7 text-start">
                    <div className=" h-100 row align-items-center container text-justify">

                        <h2 className="title mb-4">
                           About Me
                        </h2>
                        <h6 className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit rerum praesentium atque officia consequuntur placeat eos labore incidunt soluta vero corrupti facere magnam aut, numquam doloribus eum id consequatur.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus autem illo ut aspernatur quam!
                        </h6>
                    </div>
                    </div>
                </div>
            </div>

        </div>

        </>
    );
}

export default AboutMe;