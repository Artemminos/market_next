import React from 'react';
import styles from '../styles/slider.module.scss';
import _ from 'underscore'
const Slider = () => {
    const sliderRef = React.useRef(null);
    const [pos,setPos] = React.useState(0);
    const images = [
        'https://million-wallpapers.ru/wallpapers/0/42/9817679630465195967/shkodnaya-fotografiya-igrivoj-koshki.jpg',
        'https://postila.ru/data/21/c8/ae/a7/21c8aea7bbccd59cc8459015724117f9db7dba04922f178baea6ae9f1125f11f.jpg',
        'https://avatars.yandex.net/get-music-content/4384958/141c2a7c.a.15581295-1/m1000x1000?webp=false',
        'http://img10.reactor.cc/pics/post/full/anon-7063167.jpeg',
    ]
    const slideLeft = () => {
        const width = sliderRef.current.offsetWidth;
        const currentSclrollPos = sliderRef.current.scrollLeft
        if (currentSclrollPos === 0){
            sliderRef.current.scrollTo({
                left: width * (images.length - 1),
                behavior:'smooth'
            })
        }else{
            sliderRef.current.scrollTo({
                left: sliderRef.current.scrollLeft - width,
                behavior:'smooth'
            })
        }
    }
    const slideRight = () => {
        const width = sliderRef.current.offsetWidth;
        const currentSclrollPos = sliderRef.current.scrollLeft
        if (currentSclrollPos === (images.length - 1) * width){
            sliderRef.current.scrollTo({
                left: 0,
                behavior:'smooth'
            })
        }else{
            sliderRef.current.scrollTo({
                left: currentSclrollPos + width,
                behavior:'smooth'
            })
        }

    }
    const moveFn= (e)=>{
        if (e.movementX  < pos){
            slideLeft('right')
        }else{
            slideRight('left')
        }
        setPos(e.movementX)
    }
    return (
        <>
            <button onClick={slideLeft}>left
            </button>
            <div onMouseMove={_.debounce(moveFn,100)} ref={sliderRef} className={styles.slider}>
                {images.map((item, index) => {
                    return <img className={styles.slider__image} src={item} alt="image"/>
                })}
            </div>
            <button onClick={slideRight}>
                right
            </button>
        </>
    );
};

export default Slider;