import "./ColorButton.css";

function ColorButton({ bgcolor, setbgcolor }) {
  return (
    <button
      className="color-button"
      style={{ backgroundColor: bgcolor }}
      onClick={() => setbgcolor(bgcolor)}
      aria-label={`Set background color to ${bgcolor}`}
    />
  );
}

export default ColorButton;