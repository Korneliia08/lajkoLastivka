import { useState } from "react";
import s from "./StarsRating.module.scss";
import { CiStar } from "react-icons/ci";
import { PiStarFill } from "react-icons/pi";
import cn from "@/functions/cn.js";

const StarsRating = ({ value = 0, onChange }) => {
  const [hoveredStar, setHoveredStar] = useState(value);
  const [selectedStar, setSelectedStar] = useState(value);

  const handleMouseEnter = (index) => {
    setHoveredStar(index);
  };

  const handleMouseLeave = () => {
    setHoveredStar(0);
  };

  const handleClick = (index) => {
    setSelectedStar(index);
    if (onChange) {
      onChange(index); // Wywołanie callbacku przy zapisie oceny
    }
  };

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={cn(s.starsRatingContainer, s["back_" + selectedStar])}>
      {stars.map((star, index) => (
        <div
          className={cn(star === selectedStar ? s.active : "")}
          key={star}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(star)}
        >
          {star <= (hoveredStar || selectedStar) ? (
            <PiStarFill
              className={cn(s.iconStar, star > selectedStar ? s.dark : "")}
            />
          ) : (
            <CiStar
              className={cn(s.iconStar, star > selectedStar ? s.dark : "")}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default StarsRating;
