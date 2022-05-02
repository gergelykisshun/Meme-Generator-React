import React, {useEffect, useState, useRef} from "react";
import './MemeCaption.css';
import useDraggable from '../../useDraggable';

function MemeCaption(){

    const [ meme, setMeme ] = useState({
        topText: '',
        bottomText: '',
        randomImg: 'https://i.imgflip.com/4t0m5.jpg'
    });

    const [ memeData, setMemeData ] = useState([]);

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setMemeData(data.data.memes))
    }, [])
    
    const btnClickHandler = async (e) => {
        e.preventDefault();
        const currentMeme = memeData[Math.floor( Math.random() * memeData.length )]
        setMeme(prev => {
            return {
                ...prev,
                randomImg: currentMeme.url
            }
        });
    };
/* 
    const imgClickHandler = async (e) => {
        const data = await getData();
        setMeme(prev => {
            return {
                ...prev,
                randomImg: data.url
            }
        });
    };

 */
const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setMeme(prev => ({
        ...prev,
        [name]: value
    }))
};

const cardRef = useRef(null);
const cardRef2 = useRef(null);
useDraggable(cardRef);
useDraggable(cardRef2)

    return(
        <section className="form-section" id="home-section">
            <form className="meme-form">
                <input onChange={inputChangeHandler} placeholder="Your top text" name="topText" className="top-text" type="text" />
                <input onChange={inputChangeHandler} placeholder="Your bottom text" name="bottomText" className="bottom-text" type="text" />
                <button onClick={btnClickHandler} className="send-btn">
                    Get a new meme image
                    <i className="material-icons-outlined">image</i>
                </button>
            </form>
            <div className="meme-container">
                <p className="meme-top-text" ref={cardRef}>{meme.topText}</p>
                <img /*onClick={imgClickHandler}*/ className="meme-img" src={meme.randomImg} alt="meme" />
                <p className="meme-bottom-text" ref={cardRef2}>{meme.bottomText}</p>
            </div>
        </section>
    )
};

export default MemeCaption;