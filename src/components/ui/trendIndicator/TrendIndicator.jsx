import {BsCaretDownFill, BsCaretUpFill} from "react-icons/bs";


import React from 'react';
import s from './TrendIndicator.module.scss';

const TrendIndicator = ({value}) => {

    const isPositive = value >= 0; // Sprawdza, czy wartość jest dodatnia
    if (!value) {
        return <div className={s.trendIndicatorContainer}>
            -%
        </div>
    }
    return (
        <div className={s.trendIndicatorContainer}>
            {isPositive ? (
                <>
                    <BsCaretUpFill style={{color: 'green'}}/> +{Math.abs(value)}%
                </>
            ) : (
                <>
                    <BsCaretDownFill style={{color: 'red'}}/> -{Math.abs(value)}%
                </>
            )}
        </div>
    );
};

export default TrendIndicator;
