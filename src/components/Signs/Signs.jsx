import React from "react";
import "./style.css";

const RGBCompToHEX = (comp) => {
    let hex = comp.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

const RGBToHEX = (rgb_colors) =>
    "#" + RGBCompToHEX(rgb_colors[0]) + RGBCompToHEX(rgb_colors[1]) + RGBCompToHEX(rgb_colors[2]);

const RGBsign = (props) => {
    return <div className="RGBsign">
        <p>{props.rgb_color}</p>
    </div>
}

const HEXsign = (props) => {
    return <div className="HEXsign">
        <p>{RGBToHEX(props.rgb_color)}</p>
    </div>
}

export {RGBsign, HEXsign}