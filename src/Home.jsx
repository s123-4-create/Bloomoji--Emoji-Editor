import EmojiButton from "./Components/EmojiButton/EmojiButton";
import ColorButton from "./Components/ColorButton/ColorButton";
import "./Home.css";
import { useState } from "react";
// import ImgRotate from "./path/to/your/rotate-image.png"; // Uncomment and set correct path if you have an image

function Home() {
  const [emoji, setEmoji] = useState("😀");
  const [sliderValue, setSliderValue] = useState(50);
  const [bgcolor, setbgcolor] = useState("#ffffff");
  const [angle, setAngle] = useState(0);

  return (
    <div className="container">
      {/* Pink Glow Background */}
      <div

    
  className="absolute inset-0 z-0"
  style={{
    width: "100vw",
    height: "100vh",
    backgroundImage: `
      url('https://media.istockphoto.com/id/1368437213/vector/rose-pink-liquid-watercolor-background-with-floral-element-dusty-blush-marble-alcohol-ink.jpg?s=612x612&w=0&k=20&c=MJAeIUN3mgbBc2F_y8aCJkCzV_lOU-cZDxd7_KLhRDA='),
      radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #ec4899 100%)
    `,
    backgroundSize: "cover, cover",
    backgroundPosition: "center, center",
    backgroundRepeat: "no-repeat, no-repeat",
    opacity: 0.9, // Optional: slightly fade for better contrast
  }}
/>

        {/* Your Content/Components */}
      <div className="app-container relative z-10">
        <h1 className="header">✨Welcome to Bloom & Blush!!!✨</h1>
        
        <p className="app-description">
       <span style={{ color: "#e6007a", fontWeight: "bold",height:"10px",fontSize:"30px",fontFamily:"revert-layer" }}>Unleash your creativity with Emoji Editor!</span><br/> 
        Mix, match, and personalize your favorite emojis with vibrant backgrounds and playful styles.
  <br />
</p>

        <div
          className="emoji-container"
          style={{
            fontSize: `${sliderValue}px`,
            backgroundColor: bgcolor,
          }}
        >
          {emoji}
        </div>

        <div className="slider-container">
          <input
            type="range"
            min="0"
            max="100"
            className="slider"
            onChange={(e) => {
              setSliderValue(e.target.value);
            }}
            value={sliderValue}
          />
        </div>

        

        <div className="emoji-picker">
          <EmojiButton emoji={"🌸"} setEmoji={setEmoji} />
          <EmojiButton emoji={"🏵️"} setEmoji={setEmoji} />
          <EmojiButton emoji={"🌺"} setEmoji={setEmoji} />
          <EmojiButton emoji={"🌼"} setEmoji={setEmoji} />
          <EmojiButton emoji={"🌷"} setEmoji={setEmoji} />
          <EmojiButton emoji={"🌹"} setEmoji={setEmoji} />
          <EmojiButton emoji={"💐"} setEmoji={setEmoji} />
          <EmojiButton emoji={"🪻"} setEmoji={setEmoji} />
        </div>

        <div className="color-picker">
          <ColorButton bgcolor={"#ffadad"} setbgcolor={setbgcolor} />
          <ColorButton bgcolor={"#995c11ff"} setbgcolor={setbgcolor} />
          <ColorButton bgcolor={"#cdcdbbff"} setbgcolor={setbgcolor} />
          <ColorButton bgcolor={"#d8d848ff	"} setbgcolor={setbgcolor} />
          <ColorButton bgcolor={"#1f9da8ff"} setbgcolor={setbgcolor} />
          <ColorButton bgcolor={"#a0c4ff"} setbgcolor={setbgcolor} />
          <ColorButton bgcolor={"#bdb2ff"} setbgcolor={setbgcolor} />
          <ColorButton bgcolor={"#a134a1ff"} setbgcolor={setbgcolor} />
          <ColorButton bgcolor={" #e1729fff"} setbgcolor={setbgcolor}/>
          <ColorButton bgcolor={" #b30000"} setbgcolor={setbgcolor} />
          <ColorButton bgcolor={" #8bb18bff"} setbgcolor={setbgcolor} />
        </div>
      </div>
    </div>
  );
}

export default Home;