import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Aicontext } from '../config/gemini';
import { BsFillArrowRightSquareFill } from "react-icons/bs";


const TypingAnimation = ({ text, speed }) => {
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index < text.length) {
                setTypedText(prevTypedText => prevTypedText + text.charAt(index));
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed]);

    const parseMarkup = (text) => {
        // Split the text by '**'
        const parts = text.split('**');
        // Iterate through parts, adding <strong> tags to even indices
        for (let i = 0; i < parts.length; i += 2) {
            parts[i] = `<strong>${parts[i]}</strong>`;
        }
        // Join the parts back together
        return parts.join('');
    };

    return (
        <span dangerouslySetInnerHTML={{ __html: parseMarkup(typedText) }}></span>
    );
};

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [question, setQuestion] = useState("");
    const [responseText, setResponseText] = useState("");
    const { data, getdata, isloading, response,islight } = useContext(Aicontext);

    useEffect(() => {
        let styledText = formatText(data)
        setResponseText(styledText)
    }, [data])

    function formatText(text) {
        // Replace newline characters with <br> tags
        const formattedText = text.replace(/\n/g, '<br>');
        return formattedText;
    }

    return (
        <div className='h-screen bg-zinc-900 text-white' style={islight?{backgroundColor:"white",color:"black"}:null}>
            <Navbar />
            <main className='overflow-auto h-[70vh] flex justify-center'>
                {isloading ? (
                    <div className="loader">
                        <div className="hr w-[100%]"></div>
                        <div className="hr w-[95%]"></div>
                        <div className="hr w-[90%]"></div>
                        <div className="hr w-[85%]"></div>
                    </div>
                ) : response ? (
                    <section className='w-full p-4 max-w-[700px] pb-[20vh]'>
                        <div className='flex gap-2 items-center mb-[5vh]'>
                            <img src="https://tse1.mm.bing.net/th?id=OIP.-4nY2ID2ybM6f3UnHOPaeQHaFj&pid=Api&P=0&h=220" className='h-10 w-10 rounded-full' alt='Profile'/>
                            <p>{question}</p>
                        </div>
                        <TypingAnimation text={responseText} speed={20} />
                    </section>
                ) : (
                    <section id='hero' className='max-w-[500px] leading-tight px-6 py-4'>
                        <h2 className='text-[45px]'>Hello, User</h2>
                        <p className='text-[45px] font-semibold text-zinc-600'>How can I help you today?</p>
                    </section>
                )}
            </main>

            <section id='input' className='absolute bottom-5 w-full px-4 flex justify-center'>
                <div className='flex justify-between items-center bg-zinc-700 h-16 gap-10 pr-8 rounded-full w-full max-w-[800px]' style={islight?{backgroundColor:"gray"}:null}>
                    <input
                        type="text"
                        className='h-10 w-full font-semibold text-lg px-4 bg-transparent outline-none'
                        placeholder='Enter a prompt here'
                        autoFocus
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                if(inputValue!="" && inputValue!=" "){
                                    getdata(inputValue);
                                   setQuestion(inputValue);
                                   setInputValue("");
                                   }
                            }
                        }}
                    />
                    <div className="icons flex gap-4">
                        <BsFillArrowRightSquareFill size="1.5rem" className='cursor-pointer text-gray-200' onClick={()=>{
                            if(inputValue!="" && inputValue!=" "){
                             getdata(inputValue);
                            setQuestion(inputValue);
                            setInputValue("");
                            }
                        }}/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
