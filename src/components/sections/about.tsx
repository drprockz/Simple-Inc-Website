import SlideUp from "@utils/animations/slideUp"

const About = () => {
    return (
        <section className="funder-says-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SlideUp className="founder-say-part text-center">
                            <h3>Partnering with Simple Inc was a game-changer for us!<br></br><span> Their expertise in app and website development brought our vision to life with precision and creativity.</span> Their team is professional, innovative, and truly committed to delivering excellence. Highly recommended!</h3>
                            <div className="founder-name-part">
                                <img src="/images/about/Founder-Ayush.png" alt="founder" title="founder" />
                                <h2>Ayush Sancheti</h2>
                                <p>Founder of VoxFox Designs</p>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About