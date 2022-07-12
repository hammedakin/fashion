import img1 from '../../assets/7.jpg'
import { motion } from "framer-motion"

const Contact = () => {
    return (
        <>
            <main className="contact">

                <div className="row">
                   
                    <div className="col-md-6 my-5">
                        <div className="container get-quote">
                            <div className="my-2 ">
                                <h4>
                                    Contact Us
                                </h4>
                                <p>Contact us for a quote </p>
                            </div>
                            <div className="my-3 d-flex justify-content-start ">
                                <div className="col">
                                    <p className="small grey-text m-0">
                                        Email
                                    </p>
                                    <h6 className=" m-0">
                                        <a href="mailto:" className="light-text "><u>hi@trythisnow.com</u></a>
                                    </h6>
                                </div>
                                <div className="col">
                                    <p className="small grey-text m-0">
                                        Phone
                                    </p>
                                    <h6 className=" m-0">
                                        <a href="tel:+234" className="light-text "><u>0801-234-5678</u></a>
                                    </h6>
                                </div>
                            </div>

                            <div className="mt-5">
                                <h5>Get a Quote</h5>

                                <form enctype="multipart/form-data">
                                    <div className="row text-left">

                                        <div className="col-md-10 ">
                                            <label className="mb-0"> Name</label>
                                            <input
                                                type="text"
                                                className=" input-style"
                                                name="batch_no"
                                                //   onChange={handleChange}
                                                required
                                            //   value={formField.batch_no}
                                            />
                                        </div>
                                        <div className="col-md-10 ">
                                            <label className="mb-0"> Email</label>
                                            <input
                                                type="text"
                                                className=" input-style"
                                                name="batch_no"
                                                //   onChange={handleChange}
                                                required
                                            //   value={formField.batch_no}
                                            />
                                        </div>


                                        <div className="col-md-10">
                                            <label className="mb-0"> Message</label>
                                            <textarea
                                                type="text"
                                                className="input-style textarea-style"
                                                name="details"
                                                rows="3"
                                                //   onChange={handleChange}
                                                required
                                            //   value={formField.details}
                                            ></textarea>
                                        </div>

                                        <div class="col-md-10 mx-auto text-center">

                                            <div class="user-btn mb-4 mr-auto text-center">
                                                {/* {issending ? (
                            <>
                              <button
                                type="button"
                                class="btn btn-pry m-0 w-100"
                                disabled
                              >
                                <i class="bx bx-loader bx-spin bx-sm white-text" />
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                type="button"
                                class="btn btn-pry m-0 w-100"
                                action="submit"
                                onClick={(e) => inventAdd(e)}
                              >
                                submit
                              </button>
                            </>
                          )} */}

                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 m-0 p-0 contact-img">
                        {/* <img src={img1} alt="" width="100%" /> */}

                    </div>
                </div>

            </main>

        </>
    );
}

export default Contact;