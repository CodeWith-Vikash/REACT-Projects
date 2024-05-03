import React, { useRef } from 'react';
import './Style.scss';
import ContentWrapper from '../contentWrapper/Wrapper';
import { useSelector } from 'react-redux';
import posteralt from '../../assets/no-poster.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Img from '../lazyload/img';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Genres from '../genres/Genres';
import { useNavigate } from 'react-router-dom';

const Slider = ({ data, loading,endpoint }) => {
    const navigate=useNavigate()
    // console.log(data, loading);
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

    // const skiitem = () => {
    //    return 
    // }

    return (
        <div className='slider'>
            <FaArrowCircleLeft className={loading ? 'none':"arrow arrowLeft"} size="2rem" onClick={() => slideImages("left")} />
            <FaArrowCircleRight className={loading ? 'none':"arrow arrowRight"}  size="2rem" onClick={() => slideImages("right")} />

            <ContentWrapper>
                {loading ? (
                    <div className="loading">
                        {
                           [...Array(10)].map((item,index)=>{
                              return <div className="loadingSkeleton" key={index}>
                              <div className="posterske skeleton"></div>
                              <div className="textske">
                                  <div className="titleske skeleton"></div>
                                  <div className="dateske skeleton"></div>
                              </div>
                          </div>
                           })
                        }
                    </div>
                ) : (
                    <div className="slideitems" ref={slidecontainerref}>
                        {data?.map((item) => (
                            <div className="card" key={item.id} onClick={()=> {
                                navigate(`/${item.media_type || endpoint}/${item.id}`)
                            }}>
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
                                <div className="genres">
                                    <Genres data={item.genre_ids}/>
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
