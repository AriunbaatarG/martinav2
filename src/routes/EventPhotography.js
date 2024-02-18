import ImageGallery from "react-image-gallery";
import Img0 from '../assets/Event-Photography/BaletShow/balet1.jpeg';
import Img1 from '../assets/Event-Photography/BaletShow/balet2.jpeg';
import Img2 from '../assets/Event-Photography/BaletShow/balet3.jpeg';
import Img3 from '../assets/Event-Photography/BaletShow/balet4.jpeg';
import Img4 from '../assets/Event-Photography/BaletShow/balet5.jpeg';
import Img5 from '../assets/Event-Photography/Gemini/1.JPG';
import Img6 from '../assets/Event-Photography/Gemini/2.JPG';
import Img7 from '../assets/Event-Photography/Gemini/3.JPG';
import Img8 from '../assets/Event-Photography/Gemini/4.JPG';
import Img9 from '../assets/Event-Photography/Gemini/5.JPG';
import Img10 from '../assets/Event-Photography/Gemini/6.JPG';
import Img11 from '../assets/Event-Photography/Gemini/7.JPG';
import Img12 from '../assets/Event-Photography/Gemini/8.JPG';
import Img13 from '../assets/Event-Photography/Gemini/9.JPG';
import Img14 from '../assets/Event-Photography/Gemini/10.JPG';
const images = [
    {
      original: Img0,
      thumbnail: Img0,
    },
    {
      original: Img1,
      thumbnail: Img1,
    },
    {
      original: Img2,
      thumbnail: Img2,
    },
    {
        original: Img3,
        thumbnail: Img3,
    },
    {
        original: Img4,
        thumbnail: Img4,
    },
    {
        original: Img5,
        thumbnail: Img5,
    },
    {
        original: Img6,
        thumbnail: Img6,
    },
    {
        original: Img7,
        thumbnail: Img7,
    },
    {
          original: Img8,
          thumbnail: Img8,
    },
    {
          original: Img9,
          thumbnail: Img9,
    },
    {
        original: Img10,
        thumbnail: Img10,
    },
    {
        original: Img11,
        thumbnail: Img11,
    },
    {
        original: Img12,
        thumbnail: Img12,
    },
    {
        original: Img13,
        thumbnail: Img13,
    },
    {
        original: Img14,
        thumbnail: Img14,
    },

  ];
function EventPhotography() {
    return (
        <div>
            <h2>Event Photography</h2>
            <ImageGallery 
            items = {images}
            showPlayButton = {false}
            />
        </div>
    );
}

export default EventPhotography;