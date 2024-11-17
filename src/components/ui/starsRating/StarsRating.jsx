import { useState } from "react";
import s from "./StarsRating.module.scss";
import { CiStar } from "react-icons/ci";
import {PiStarFill, PiStarHalfFill} from "react-icons/pi";

const StarsRating = ({ onChange }) => {
    const [hoveredStar, setHoveredStar] = useState(0);
    const [selectedStar, setSelectedStar] = useState(0);

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
        <div className={s.starsRatingContainer}>
            {stars.map((star) => (
                <div
                    key={star}
                    onMouseEnter={() => handleMouseEnter(star)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(star)}

                >
                    {star <= (hoveredStar || selectedStar) ? (
                        <PiStarFill className={s.iconStar} />
                    ) : (
                        <CiStar className={s.iconStar} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default StarsRating;
