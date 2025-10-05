import "./EmojiButton.css";

function EmojiButton({emoji,setEmoji}) {

  return (

    <div
    className="emoji-option"
    onClick={()=>{
        setEmoji(emoji);
    }}
    type="button">
    {emoji}
    </div>
  )
}

export default EmojiButton;
