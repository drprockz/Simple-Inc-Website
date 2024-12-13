import { Link } from 'react-scroll';
import SlideUp from "@utils/animations/slideUp"

const Hero = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <SlideUp className="hero-content position-relative">
                            <h3>We Keep it Simple!</h3>
                            <h2>Crafting Powerful Digital Solutions – Your Partner for Seamless Growth!</h2>
                            <p>Elevate your brand with tailored design and development solutions. From innovative websites and apps to impactful branding, we deliver excellence that drives results. Let’s create something extraordinary together!</p>
                            <div className="hero-btns">
                                <Link to="pricing" smooth={true}  className="theme-btn">Let's get started!</Link>
                                <Link to="book" smooth={true}  className="theme-btn differenct-color">Book a free call</Link>
                            </div>
                            <div className="dot-shape"><img src="/images/shapes/shape1.png" alt="Shape" /></div>
                            <div className="dot-shape2"><img src="/images/shapes/shape2.png" alt="Shape" /></div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero