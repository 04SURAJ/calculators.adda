import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { searchIndex } from "../data/searchIndex";

const CalculatorWheel = () => {
  const navigate = useNavigate();
  const wheelRef = useRef(null);

  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const wheelItems = searchIndex.slice(0, 8); // popular calculators
  const numItems = wheelItems.length;
  const angle = 360 / numItems;

  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);

    const randomIndex = Math.floor(Math.random() * numItems);
    const extraSpins = 3 * 360 + randomIndex * angle + angle / 2;
    setRotation(rotation + extraSpins);

    // Listen for transition end
    const handleTransitionEnd = () => {
      setSpinning(false);
      navigate(`/calculators/other/${wheelItems[randomIndex].slug}`);

      wheelRef.current.removeEventListener("transitionend", handleTransitionEnd);
    };

    wheelRef.current.addEventListener("transitionend", handleTransitionEnd);
  };

  return (
    <div className="text-center my-5">
      <h2 className="mb-3 fw-semibold">Calculator Explorer Wheel</h2>
      <div className="position-relative">
        <div className="wheel-pointer"></div>
        <div
          ref={wheelRef}
          className="wheel-container mx-auto position-relative"
          style={{
            transform: `rotate(${rotation}deg)`,
          }}
        >
          {wheelItems.map((item, index) => {
            const itemAngle = (360 / numItems) * index;
            return (
              <div
                key={item.slug}
                style={{
                  position: "absolute",
                  width: "50%",
                  height: "50%",
                  top: "50%",
                  left: "50%",
                  transformOrigin: "0% 0%",
                  transform: `rotate(${itemAngle}deg) translateX(100%)`,
                  textAlign: "center",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="btn btn-primary mt-3"
        onClick={spinWheel}
        disabled={spinning}
      >
        {spinning ? "Spinning..." : "Spin the Wheel"}
      </button>
    </div>
  );
};

export default CalculatorWheel;
