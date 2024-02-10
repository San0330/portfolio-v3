import Section from "./Section";
import { Heading1, Heading2 } from "./UIs/Headings";

import Slider from "react-slick";
import Carousel from "./UIs/Carousel";

const Achievements = () => {
    return (
        <Section name='achievements'>
            <Heading1 title='Certified' />
            <Heading2 title='Achievements' />

            <AchievementsCarousels />
        </Section>
    )
}


const AchievementsCarousels = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        lazyload: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <div className='mt-10 md:mt-20 px-8'>
            <Slider {...settings}>
                <Carousel image='/images/certs/crl.png' />
                <Carousel image='/images/certs/problem_solving.png' />
                <Carousel image='/images/certs/icpc.jpg' />
                <Carousel image='/images/certs/flutter.jpg' />
                <Carousel image='/images/certs/fundamental_analysis.png' />
                <Carousel image='/images/certs/python.png' />
                <Carousel image='/images/certs/web_certificate.jpg' />
                <Carousel image='/images/certs/pokhara_prog_contest.jpg' />
                <Carousel image='/images/certs/hackathon.jpg' />
                <Carousel image='/images/certs/nepali_samaj.jpg' />
            </Slider>
        </div>
    )
}



export default Achievements;
