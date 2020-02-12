let c = $("#c");
let ctx = c.getContext("2d");
let cw = c.width = window.innerWidth;
let ch = c.height = window.innerHeight;
let cx = cw / 2;
let cy = ch / 2;
let rad = Math.PI / 180;
let num = 100;
let t = 0.2;

ctx.strokeStyle = "white";
ctx.shadowBlur = 5;
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowColor = "#333";
ctx.globalAlpha = 0.85;

let colors = ["#930c37", "#ea767a", "#ee6133", "#ecac43", "#fb9983", "#f9bc9f", "#f8ed38", "#a8e3f9", "#d1f2fd", "#ecd5f5", "#fee4fd", "#8520b4", "#FA2E59", "#FF703F", "#FF703F", "#F7BC05", "#ECF6BB", "#76BCAD"];

for (let n=0; n<num; n++) {
    flowers[n] = {};
    flowers[n].cx = Math.ceil(Math.random() * cw);
    flowers[n].cy = Math.ceil(Math.random() * ch);
    
}