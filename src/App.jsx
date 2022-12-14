import React from "react";
import {Card} from "./components/Card/Card"

const GetColorRGB = () =>
    [Math.round(Math.random()*255), Math.round(Math.random()*255), Math.round(Math.random()*255)]

const MakeLighter = (rgb_colors) => {
    let step = 20;
    let r = Math.min(Math.round(rgb_colors[0] + step), 255);
    let g = Math.min(Math.round(rgb_colors[1] + step), 255);
    let b = Math.min(Math.round(rgb_colors[2] + step), 255);
    return [r, g, b]
}

const MakeDarker = (rgb_colors) => {
    let step = -20;
    let r = Math.max(Math.round(rgb_colors[0] + step), 0);
    let g = Math.max(Math.round(rgb_colors[1] + step), 0);
    let b = Math.max(Math.round(rgb_colors[2] + step), 0);
    return [r, g, b]
}

const GetTriadic1 = (rgb_color) =>
    [rgb_color[2], rgb_color[0], rgb_color[1]]

const GetTriadic2 = (rgb_color) =>
    [rgb_color[1], rgb_color[2], rgb_color[0]]

let main_rgb_colors = GetColorRGB();

let dark1 = MakeDarker(main_rgb_colors);
let dark2 = MakeDarker(dark1);
let dark3 = MakeDarker(dark2);

let light1 = MakeLighter(main_rgb_colors);
let light2 = MakeLighter(light1);
let light3 = MakeLighter(light2);

let triad1 = GetTriadic1(main_rgb_colors)
let triad2 = GetTriadic2(main_rgb_colors)

export default () => {
    return <>
        <div className="container">
            <div className="zalupa">
                <Card rgb_color={dark3} />
                <Card rgb_color={dark2} />
                <Card rgb_color={dark1} />
                <Card rgb_color={main_rgb_colors} />
                <Card rgb_color={light1} />
                <Card rgb_color={light2} />
                <Card rgb_color={light3} />
            </div>
            <div className="zalupa2">
                <Card rgb_color={triad1} />
                <Card rgb_color={main_rgb_colors} />
                <Card rgb_color={triad2} />
            </div>
        </div>
    </>
}