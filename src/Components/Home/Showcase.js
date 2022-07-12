import down from '../../assets/icon-arrow-down.svg'

const Showcase = () => {
    return (
        <>
            <section className="showcase">
                <div className="showcase-content text-center ">
                    <h1 className="light-text mb-5 pb-5 "> I'm just too good</h1>
                    <img src={down} width="5%" className='animated bounce infnite' />
                </div>
            </section>

        </>
    );
}

export default Showcase;