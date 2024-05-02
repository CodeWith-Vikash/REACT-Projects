import React, { useRef } from 'react';
import './Style.scss';
import ContentWrapper from '../contentWrapper/Wrapper';
import { useSelector } from 'react-redux';
import posteralt from '../../assets/no-poster.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Img from '../lazyload/img';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ data, loading }) => {
    console.log(data, loading);
    const { url } = useSelector((state) => state.home);
    const slidecontainerref = useRef(null);

    const slideImages = (dir) => {
        let container = slidecontainerref.current;
        const scrollAmount = dir === "left" ? container.scrollLeft - (container.offsetWidth) : container.scrollLeft + (container.offsetWidth);
        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
    };

    const skiitem = () => (
        <div className="loadingSkeleton">
            <div className="posterske skeleton"></div>
            <div className="textske">
                <div className="titleske skeleton"></div>
                <div className="dateske skeleton"></div>
            </div>
        </div>
    );

    return (
        <div className='slider'>
            <FaArrowCircleLeft className='arrow arrowLeft' size="2rem" onClick={() => slideImages("left")} />
            <FaArrowCircleRight className='arrow arrowRight' size="2rem" onClick={() => slideImages("right")} />
            <ContentWrapper>
                {loading ? (
                    <div className="loading">
                        {[...Array(10)].map((_, index) => (
                            <React.Fragment key={index}>
                                {skiitem()}
                            </React.Fragment>
                        ))}
                    </div>
                ) : (
                    <div className="slideitems" ref={slidecontainerref}>
                        {data?.map((item) => (
                            <div className="card" key={item.id}>
                                <Img src={item.poster_path ? url.poster + item.poster_path : posteralt} alt="" />
                                <div className="circle">
                                    <CircularProgressbar
                                        value={item.vote_average.toFixed(1)}
                                        maxValue={10}
                                        text={item.vote_average.toFixed(1)}
                                        styles={buildStyles({
                                            pathColor:
                                                item.vote_average.toFixed(1) < 5 ? "red" : item.vote_average.toFixed(1) < 7 ? "orange" : "green",
                                            textColor: "black",
                                            textSize: "30"
                                        })}
                                    />
                                </div>
                                <p>{item.title || item.name}</p>
                                <span>{item.release_date || item.first_air_date}</span>
                            </div>
                        ))}
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Slider;
