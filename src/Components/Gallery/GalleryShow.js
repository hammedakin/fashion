
import img from '../../assets/5.jpg'
import img1 from '../../assets/2.jpg'
import img2 from '../../assets/3.jpg'

import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const gallery = [
    { title: "First", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur amet sapiente porro neque ipsum optio repellendus explicabo inventore. Accusantium asperiores reprehenderit veritatis aspernatur inventore ipsa, beatae consectetur cupiditate blanditiis repudiandae.", coverImg:img, images: [img,img1,img2] },
    { title: "Second", description: " ipsum optio repellendus explicabo inventore. Accusantium asperiores reprehenderit veritatis aspernatur inventore ipsa, beatae consectetur cupiditate blanditiis repudiandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur amet sapiente porro neque", coverImg: img1, images: [{ img1 }, { img2 }, { img }] },
    { title: "Third", description: "consectetur adipisicing elit. Aspernatur amet sapiente porro neque ipsum optio repellendus explicabo inventore. Accusantium asperiores reprehenderit veritatis aspernatur inventore ipsa, beatae consectetur cupiditate blanditiis repudiandae.", coverImg: img2, images: [{ img2 }, { img }, { img1 }] },
    { title: "First", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur amet sapiente porro neque ipsum optio repellendus explicabo inventore. Accusantium asperiores reprehenderit veritatis aspernatur inventore ipsa, beatae consectetur cupiditate blanditiis repudiandae.", coverImg:img, images: [img,img1,img2] },
    { title: "Second", description: " ipsum optio repellendus explicabo inventore. Accusantium asperiores reprehenderit veritatis aspernatur inventore ipsa, beatae consectetur cupiditate blanditiis repudiandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur amet sapiente porro neque", coverImg: img1, images: [{ img1 }, { img2 }, { img }] },
    { title: "Third", description: "consectetur adipisicing elit. Aspernatur amet sapiente porro neque ipsum optio repellendus explicabo inventore. Accusantium asperiores reprehenderit veritatis aspernatur inventore ipsa, beatae consectetur cupiditate blanditiis repudiandae.", coverImg: img2, images: [{ img2 }, { img }, { img1 }] },
]
const GalleryShow = () => {
  
    return (
        <div className='gallery-show'>

            <div className="row">
                {gallery.map(({ title, description, coverImg, images }, i) => {
                    return (
                        <>
                            <div className="col-md-4 my-4">
                                <div className="card h-100">
                                    <div className=" bg-image hover-overlay hover-zoom hover-shado ripple">
                                        <img src={coverImg} class="card-img-top " width={"100%"} />
                                        <a href="#!" className=''>
                                            <div class="mask text-center"
                                                style={{ backgroundColor: "rgba(50, 0, 0, 0.8)", padding: "10rem 0" }}>
                                                <h5 className="mt-5 pt-5 light-text">
                                                    {title}
                                                </h5>
                                                <Link to={`/gallery/1`}>
                                                <button className='btn btn-light'>View </button>
                                                </Link>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="card-body text-center dark-text">
                                        Lorem, ipsum dolor
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>


        </div>
    )
}

export default GalleryShow