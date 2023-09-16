function setup() {
    createCanvas(1150,1500);
    background (227, 231, 234);//rgb color
}

function draw() {
    noStroke();
    
    fill(52,117,62);
    quad(655, 294, 936, 520,840,637,564,417);//green part

    fill('black');
    quad(249, 176, 1064, 810, 925,983 ,46,451);//black part

    fill(231,191,65);
    quad(255, 584, 991, 1023, 977,1045,220,649);//yellow part

    fill(22,63,163);
    quad(297, 691, 939, 1030, 933,1041,284,710);//blue part

    fill(2,13,61);
    quad(475, 810, 828, 991, 771 ,1100 ,413,925);//dark blue part


}
