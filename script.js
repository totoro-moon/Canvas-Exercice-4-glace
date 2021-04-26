function init() {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    draw(ctx);
}

function draw(ctx) {

    var alpha = ctx.globalAlpha;

    // calque1/Rectangle
    ctx.save();
    ctx.globalAlpha = alpha * 0.32;
    ctx.beginPath();
    ctx.moveTo(469.2, 549.5);
    ctx.lineTo(0.0, 549.5);
    ctx.lineTo(0.0, 0.0);
    ctx.lineTo(469.2, 0.0);
    ctx.lineTo(469.2, 549.5);
    ctx.closePath();
    ctx.fillStyle = "rgb(168, 218, 230)";
    ctx.fill();

    // calque1/Trac
    ctx.globalAlpha = alpha * 1.00;
    ctx.beginPath();
    ctx.moveTo(291.8, 94.1);
    ctx.lineTo(272.2, 127.0);
    ctx.fillStyle = "rgb(239, 192, 98)";
    ctx.fill();
    ctx.lineWidth = 5.0;
    ctx.strokeStyle = "rgb(219, 165, 68)";
    ctx.stroke();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(334.4, 212.8);
    ctx.bezierCurveTo(334.4, 263.1, 290.9, 303.9, 237.2, 303.9);
    ctx.bezierCurveTo(183.5, 303.9, 139.9, 263.1, 139.9, 212.8);
    ctx.bezierCurveTo(139.9, 162.4, 183.5, 121.6, 237.2, 121.6);
    ctx.bezierCurveTo(290.9, 121.6, 334.4, 162.4, 334.4, 212.8);
    ctx.closePath();
    ctx.fillStyle = "rgb(225, 144, 188)";
    ctx.fill();
    ctx.lineWidth = 3.0;
    ctx.strokeStyle = "rgb(224, 143, 188)";
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(156.8, 270.0);
    ctx.bezierCurveTo(155.0, 270.0, 153.8, 271.8, 154.3, 273.5);
    ctx.lineTo(161.9, 296.0);
    ctx.lineTo(235.8, 515.5);
    ctx.bezierCurveTo(236.6, 517.9, 240.0, 517.8, 240.8, 515.4);
    ctx.lineTo(316.3, 273.4);
    ctx.bezierCurveTo(316.8, 271.7, 315.6, 270.0, 313.8, 270.0);
    ctx.lineTo(156.8, 270.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(239, 192, 98)";
    ctx.fill();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(162.9, 291.5);
    ctx.lineTo(181.4, 270.0);
    ctx.fill();
    ctx.lineWidth = 5.0;
    ctx.strokeStyle = "rgb(219, 165, 68)";
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(172.6, 313.4);
    ctx.lineTo(207.4, 270.0);
    ctx.fill();
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(177.0, 335.3);
    ctx.lineTo(231.4, 270.0);
    ctx.fill();
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(185.0, 364.5);
    ctx.lineTo(261.0, 270.0);
    ctx.fill();
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(193.5, 389.9);
    ctx.lineTo(289.9, 270.0);
    ctx.fill();
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(203.3, 418.9);
    ctx.lineTo(314.3, 270.0);
    ctx.fill();
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(214.2, 451.2);
    ctx.lineTo(297.6, 328.1);
    ctx.fill();
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(222.8, 476.9);
    ctx.lineTo(273.6, 402.1);
    ctx.fill();
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(229.7, 497.4);
    ctx.lineTo(259.9, 453.5);
    ctx.fill();
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(246.8, 495.9);
    ctx.lineTo(215.0, 450.0);
    ctx.fill();
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(253.6, 474.3);
    ctx.lineTo(199.1, 401.5);
    ctx.fill();
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(259.9, 453.5);
    ctx.lineTo(184.3, 359.5);
    ctx.fill();
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(266.9, 429.6);
    ctx.lineTo(171.2, 310.9);
    ctx.fill();
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(273.6, 402.1);
    ctx.lineTo(164.0, 270.0);
    ctx.fill();
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(282.7, 379.6);
    ctx.lineTo(191.8, 270.0);
    ctx.fill();
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(291.4, 350.5);
    ctx.lineTo(224.6, 270.0);
    ctx.fill();
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(298.6, 329.4);
    ctx.lineTo(249.8, 270.6);
    ctx.fill();
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(305.9, 306.8);
    ctx.lineTo(273.7, 270.0);
    ctx.fill();
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(312.6, 285.1);
    ctx.lineTo(299.5, 270.0);
    ctx.fill();
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(140.0, 200.1);
    ctx.bezierCurveTo(144.2, 221.9, 192.9, 251.5, 241.7, 250.2);
    ctx.bezierCurveTo(295.4, 248.8, 312.9, 223.7, 334.4, 195.6);
    ctx.bezierCurveTo(340.2, 215.9, 328.4, 256.4, 319.9, 259.4);
    ctx.bezierCurveTo(292.8, 268.7, 160.5, 268.4, 154.2, 262.0);
    ctx.bezierCurveTo(147.9, 255.6, 133.5, 224.7, 140.0, 200.1);
    ctx.closePath();
    ctx.fillStyle = "rgb(207, 122, 173)";
    ctx.fill();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(230.1, 231.3);
    ctx.bezierCurveTo(230.1, 231.3, 234.5, 241.6, 247.5, 238.0);
    ctx.bezierCurveTo(260.6, 234.5, 257.9, 224.7, 257.9, 224.7);
    ctx.lineWidth = 3.0;
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.stroke();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(213.6, 193.6);
    ctx.bezierCurveTo(215.0, 195.8, 211.1, 200.5, 205.1, 204.0);
    ctx.bezierCurveTo(199.0, 207.5, 193.1, 208.5, 191.7, 206.2);
    ctx.bezierCurveTo(190.4, 203.9, 194.3, 199.2, 200.3, 195.7);
    ctx.bezierCurveTo(206.4, 192.2, 212.3, 191.3, 213.6, 193.6);
    ctx.closePath();
    ctx.fillStyle = "rgb(241, 142, 104)";
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(206.1, 177.3);
    ctx.bezierCurveTo(211.3, 181.9, 211.8, 189.9, 207.2, 195.2);
    ctx.bezierCurveTo(202.5, 200.4, 194.5, 200.9, 189.3, 196.3);
    ctx.bezierCurveTo(184.0, 191.6, 183.5, 183.6, 188.2, 178.4);
    ctx.bezierCurveTo(192.8, 173.1, 200.8, 172.6, 206.1, 177.3);
    ctx.closePath();
    ctx.fillStyle = "rgb(1, 1, 2)";
    ctx.fill();
    ctx.lineWidth = 1.0;
    ctx.stroke();

    // calque1/Groupe

    // calque1/Groupe/Ellipse
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(199.6, 183.8);
    ctx.bezierCurveTo(201.7, 184.5, 202.8, 186.8, 202.0, 188.9);
    ctx.bezierCurveTo(201.2, 191.0, 198.8, 192.1, 196.6, 191.4);
    ctx.bezierCurveTo(194.5, 190.7, 193.4, 188.4, 194.2, 186.3);
    ctx.bezierCurveTo(195.0, 184.2, 197.4, 183.1, 199.6, 183.8);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();

    // calque1/Groupe/Trac
    ctx.beginPath();
    ctx.moveTo(198.9, 187.9);
    ctx.lineTo(190.7, 184.6);
    ctx.lineTo(198.9, 187.9);
    ctx.closePath();
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fill();
    ctx.lineWidth = 2.0;
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.stroke();

    // calque1/Groupe/Groupe

    // calque1/Groupe/Groupe/Trac
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(194.9, 179.8);
    ctx.lineTo(199.5, 189.4);
    ctx.fill();
    ctx.stroke();

    // calque1/Ellipse
    ctx.restore();
    ctx.restore();
    ctx.beginPath();
    ctx.moveTo(277.2, 181.6);
    ctx.bezierCurveTo(277.2, 184.3, 271.6, 186.4, 264.6, 186.4);
    ctx.bezierCurveTo(257.6, 186.4, 252.0, 184.3, 252.0, 181.6);
    ctx.bezierCurveTo(252.0, 179.0, 257.6, 176.8, 264.6, 176.8);
    ctx.bezierCurveTo(271.6, 176.8, 277.2, 179.0, 277.2, 181.6);
    ctx.closePath();
    ctx.fillStyle = "rgb(241, 142, 104)";
    ctx.fill();

    // calque1/Groupe

    // calque1/Groupe/Trac
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(253.3, 180.8);
    ctx.bezierCurveTo(252.6, 170.5, 269.9, 161.4, 279.3, 177.4);
    ctx.lineWidth = 3.0;
    ctx.stroke();

    // calque1/Groupe/Trac
    ctx.beginPath();
    ctx.moveTo(269.9, 161.4);
    ctx.lineTo(269.3, 169.0);
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();
    ctx.stroke();

    // calque1/Groupe/Trac
    ctx.beginPath();
    ctx.moveTo(272.7, 170.4);
    ctx.lineTo(279.3, 163.3);
    ctx.fill();
    ctx.stroke();

    // calque1/Trac
    ctx.restore();
    ctx.globalAlpha = alpha * 0.58;
    ctx.beginPath();
    ctx.moveTo(209.8, 127.2);
    ctx.bezierCurveTo(187.1, 132.1, 168.0, 148.6, 161.7, 159.8);
    ctx.bezierCurveTo(156.5, 168.4, 166.5, 168.2, 168.7, 164.3);
    ctx.bezierCurveTo(180.9, 146.6, 199.0, 138.2, 211.5, 132.8);
    ctx.bezierCurveTo(220.3, 129.7, 215.2, 126.3, 209.8, 127.2);
    ctx.closePath();
    ctx.fillStyle = "rgb(247, 226, 239)";
    ctx.fill();

    // calque1/Ellipse
    ctx.globalAlpha = alpha * 1.00;
    ctx.beginPath();
    ctx.moveTo(233.3, 131.8);
    ctx.bezierCurveTo(233.3, 133.9, 231.6, 135.6, 229.5, 135.6);
    ctx.bezierCurveTo(227.4, 135.6, 225.7, 133.9, 225.7, 131.8);
    ctx.bezierCurveTo(225.7, 129.7, 227.4, 128.0, 229.5, 128.0);
    ctx.bezierCurveTo(231.6, 128.0, 233.3, 129.7, 233.3, 131.8);
    ctx.closePath();
    ctx.fillStyle = "rgb(106, 192, 173)";
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(202.7, 151.8);
    ctx.bezierCurveTo(202.7, 153.9, 201.0, 155.6, 198.9, 155.6);
    ctx.bezierCurveTo(196.8, 155.6, 195.1, 153.9, 195.1, 151.8);
    ctx.bezierCurveTo(195.1, 149.7, 196.8, 148.0, 198.9, 148.0);
    ctx.bezierCurveTo(201.0, 148.0, 202.7, 149.7, 202.7, 151.8);
    ctx.closePath();
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(222.5, 146.0);
    ctx.bezierCurveTo(222.5, 148.1, 220.9, 149.8, 218.8, 149.8);
    ctx.bezierCurveTo(216.7, 149.8, 215.0, 148.1, 215.0, 146.0);
    ctx.bezierCurveTo(215.0, 143.9, 216.7, 142.2, 218.8, 142.2);
    ctx.bezierCurveTo(220.9, 142.2, 222.5, 143.9, 222.5, 146.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(246, 235, 101)";
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(204.2, 139.4);
    ctx.bezierCurveTo(204.2, 141.5, 202.6, 143.2, 200.5, 143.2);
    ctx.bezierCurveTo(198.4, 143.2, 196.7, 141.5, 196.7, 139.4);
    ctx.bezierCurveTo(196.7, 137.3, 198.4, 135.6, 200.5, 135.6);
    ctx.bezierCurveTo(202.6, 135.6, 204.2, 137.3, 204.2, 139.4);
    ctx.closePath();
    ctx.fillStyle = "rgb(180, 153, 200)";
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(259.5, 144.9);
    ctx.bezierCurveTo(259.5, 147.0, 257.8, 148.6, 255.7, 148.6);
    ctx.bezierCurveTo(253.7, 148.6, 252.0, 147.0, 252.0, 144.9);
    ctx.bezierCurveTo(252.0, 142.8, 253.7, 141.1, 255.7, 141.1);
    ctx.bezierCurveTo(257.8, 141.1, 259.5, 142.8, 259.5, 144.9);
    ctx.closePath();
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(224.8, 124.8);
    ctx.bezierCurveTo(224.8, 126.9, 223.1, 128.5, 221.0, 128.5);
    ctx.bezierCurveTo(218.9, 128.5, 217.2, 126.9, 217.2, 124.8);
    ctx.bezierCurveTo(217.2, 122.7, 218.9, 121.0, 221.0, 121.0);
    ctx.bezierCurveTo(223.1, 121.0, 224.8, 122.7, 224.8, 124.8);
    ctx.closePath();
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(186.0, 166.9);
    ctx.bezierCurveTo(186.0, 168.9, 184.3, 170.6, 182.3, 170.6);
    ctx.bezierCurveTo(180.2, 170.6, 178.5, 168.9, 178.5, 166.9);
    ctx.bezierCurveTo(178.5, 164.8, 180.2, 163.1, 182.3, 163.1);
    ctx.bezierCurveTo(184.3, 163.1, 186.0, 164.8, 186.0, 166.9);
    ctx.closePath();
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(274.1, 142.8);
    ctx.bezierCurveTo(274.1, 144.9, 272.4, 146.5, 270.3, 146.5);
    ctx.bezierCurveTo(268.2, 146.5, 266.5, 144.9, 266.5, 142.8);
    ctx.bezierCurveTo(266.5, 140.7, 268.2, 139.0, 270.3, 139.0);
    ctx.bezierCurveTo(272.4, 139.0, 274.1, 140.7, 274.1, 142.8);
    ctx.closePath();
    ctx.fillStyle = "rgb(250, 249, 249)";
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(308.8, 170.6);
    ctx.bezierCurveTo(308.8, 172.7, 307.1, 174.4, 305.0, 174.4);
    ctx.bezierCurveTo(302.9, 174.4, 301.2, 172.7, 301.2, 170.6);
    ctx.bezierCurveTo(301.2, 168.5, 302.9, 166.9, 305.0, 166.9);
    ctx.bezierCurveTo(307.1, 166.9, 308.8, 168.5, 308.8, 170.6);
    ctx.closePath();
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(186.0, 153.6);
    ctx.bezierCurveTo(186.0, 155.7, 184.3, 157.4, 182.3, 157.4);
    ctx.bezierCurveTo(180.2, 157.4, 178.5, 155.7, 178.5, 153.6);
    ctx.bezierCurveTo(178.5, 151.5, 180.2, 149.8, 182.3, 149.8);
    ctx.bezierCurveTo(184.3, 149.8, 186.0, 151.5, 186.0, 153.6);
    ctx.closePath();
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(221.0, 161.2);
    ctx.bezierCurveTo(221.0, 163.3, 219.3, 165.0, 217.2, 165.0);
    ctx.bezierCurveTo(215.1, 165.0, 213.4, 163.3, 213.4, 161.2);
    ctx.bezierCurveTo(213.4, 159.1, 215.1, 157.4, 217.2, 157.4);
    ctx.bezierCurveTo(219.3, 157.4, 221.0, 159.1, 221.0, 161.2);
    ctx.closePath();
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(243.2, 141.1);
    ctx.bezierCurveTo(243.2, 143.2, 241.5, 144.9, 239.4, 144.9);
    ctx.bezierCurveTo(237.3, 144.9, 235.6, 143.2, 235.6, 141.1);
    ctx.bezierCurveTo(235.6, 139.0, 237.3, 137.3, 239.4, 137.3);
    ctx.bezierCurveTo(241.5, 137.3, 243.2, 139.0, 243.2, 141.1);
    ctx.closePath();
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(164.0, 182.8);
    ctx.bezierCurveTo(164.0, 184.9, 162.3, 186.5, 160.2, 186.5);
    ctx.bezierCurveTo(158.1, 186.5, 156.4, 184.9, 156.4, 182.8);
    ctx.bezierCurveTo(156.4, 180.7, 158.1, 179.0, 160.2, 179.0);
    ctx.bezierCurveTo(162.3, 179.0, 164.0, 180.7, 164.0, 182.8);
    ctx.closePath();
    ctx.fillStyle = "rgb(180, 153, 200)";
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(321.0, 158.3);
    ctx.bezierCurveTo(321.0, 160.4, 319.3, 162.1, 317.2, 162.1);
    ctx.bezierCurveTo(315.2, 162.1, 313.5, 160.4, 313.5, 158.3);
    ctx.bezierCurveTo(313.5, 156.2, 315.2, 154.5, 317.2, 154.5);
    ctx.bezierCurveTo(319.3, 154.5, 321.0, 156.2, 321.0, 158.3);
    ctx.closePath();
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(270.1, 128.5);
    ctx.bezierCurveTo(270.1, 130.6, 268.4, 132.3, 266.3, 132.3);
    ctx.bezierCurveTo(264.2, 132.3, 262.5, 130.6, 262.5, 128.5);
    ctx.bezierCurveTo(262.5, 126.5, 264.2, 124.8, 266.3, 124.8);
    ctx.bezierCurveTo(268.4, 124.8, 270.1, 126.5, 270.1, 128.5);
    ctx.closePath();
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(239.4, 157.4);
    ctx.bezierCurveTo(239.4, 159.5, 237.7, 161.2, 235.6, 161.2);
    ctx.bezierCurveTo(233.5, 161.2, 231.9, 159.5, 231.9, 157.4);
    ctx.bezierCurveTo(231.9, 155.3, 233.5, 153.6, 235.6, 153.6);
    ctx.bezierCurveTo(237.7, 153.6, 239.4, 155.3, 239.4, 157.4);
    ctx.closePath();
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(284.4, 149.8);
    ctx.bezierCurveTo(284.4, 151.9, 282.7, 153.6, 280.6, 153.6);
    ctx.bezierCurveTo(278.5, 153.6, 276.8, 151.9, 276.8, 149.8);
    ctx.bezierCurveTo(276.8, 147.7, 278.5, 146.0, 280.6, 146.0);
    ctx.bezierCurveTo(282.7, 146.0, 284.4, 147.7, 284.4, 149.8);
    ctx.closePath();
    ctx.fillStyle = "rgb(246, 235, 101)";
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(204.8, 128.0);
    ctx.bezierCurveTo(204.8, 130.1, 203.1, 131.8, 201.0, 131.8);
    ctx.bezierCurveTo(198.9, 131.8, 197.2, 130.1, 197.2, 128.0);
    ctx.bezierCurveTo(197.2, 125.9, 198.9, 124.2, 201.0, 124.2);
    ctx.bezierCurveTo(203.1, 124.2, 204.8, 125.9, 204.8, 128.0);
    ctx.closePath();
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(155.8, 168.7);
    ctx.bezierCurveTo(155.8, 170.8, 154.1, 172.5, 152.0, 172.5);
    ctx.bezierCurveTo(149.9, 172.5, 148.2, 170.8, 148.2, 168.7);
    ctx.bezierCurveTo(148.2, 166.6, 149.9, 164.9, 152.0, 164.9);
    ctx.bezierCurveTo(154.1, 164.9, 155.8, 166.6, 155.8, 168.7);
    ctx.closePath();
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(326.0, 187.6);
    ctx.bezierCurveTo(326.0, 189.7, 324.3, 191.4, 322.2, 191.4);
    ctx.bezierCurveTo(320.1, 191.4, 318.4, 189.7, 318.4, 187.6);
    ctx.bezierCurveTo(318.4, 185.5, 320.1, 183.8, 322.2, 183.8);
    ctx.bezierCurveTo(324.3, 183.8, 326.0, 185.5, 326.0, 187.6);
    ctx.closePath();
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(237.0, 120.1);
    ctx.bezierCurveTo(237.0, 122.2, 235.4, 123.9, 233.3, 123.9);
    ctx.bezierCurveTo(231.2, 123.9, 229.5, 122.2, 229.5, 120.1);
    ctx.bezierCurveTo(229.5, 118.0, 231.2, 116.3, 233.3, 116.3);
    ctx.bezierCurveTo(235.4, 116.3, 237.0, 118.0, 237.0, 120.1);
    ctx.closePath();
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(301.2, 139.5);
    ctx.bezierCurveTo(301.2, 141.6, 299.5, 143.3, 297.4, 143.3);
    ctx.bezierCurveTo(295.3, 143.3, 293.6, 141.6, 293.6, 139.5);
    ctx.bezierCurveTo(293.6, 137.4, 295.3, 135.7, 297.4, 135.7);
    ctx.bezierCurveTo(299.5, 135.7, 301.2, 137.4, 301.2, 139.5);
    ctx.closePath();
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(303.5, 154.5);
    ctx.bezierCurveTo(303.5, 156.6, 301.8, 158.3, 299.7, 158.3);
    ctx.bezierCurveTo(297.6, 158.3, 295.9, 156.6, 295.9, 154.5);
    ctx.bezierCurveTo(295.9, 152.4, 297.6, 150.7, 299.7, 150.7);
    ctx.bezierCurveTo(301.8, 150.7, 303.5, 152.4, 303.5, 154.5);
    ctx.closePath();
    ctx.fillStyle = "rgb(106, 192, 173)";
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(170.1, 147.0);
    ctx.bezierCurveTo(170.1, 149.1, 168.4, 150.7, 166.3, 150.7);
    ctx.bezierCurveTo(164.2, 150.7, 162.5, 149.1, 162.5, 147.0);
    ctx.bezierCurveTo(162.5, 144.9, 164.2, 143.2, 166.3, 143.2);
    ctx.bezierCurveTo(168.4, 143.2, 170.1, 144.9, 170.1, 147.0);
    ctx.closePath();
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(283.6, 130.9);
    ctx.bezierCurveTo(283.6, 132.9, 281.9, 134.6, 279.8, 134.6);
    ctx.bezierCurveTo(277.7, 134.6, 276.0, 132.9, 276.0, 130.9);
    ctx.bezierCurveTo(276.0, 128.8, 277.7, 127.1, 279.8, 127.1);
    ctx.bezierCurveTo(281.9, 127.1, 283.6, 128.8, 283.6, 130.9);
    ctx.closePath();
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(171.1, 199.9);
    ctx.bezierCurveTo(171.1, 202.0, 169.4, 203.7, 167.3, 203.7);
    ctx.bezierCurveTo(165.2, 203.7, 163.5, 202.0, 163.5, 199.9);
    ctx.bezierCurveTo(163.5, 197.8, 165.2, 196.1, 167.3, 196.1);
    ctx.bezierCurveTo(169.4, 196.1, 171.1, 197.8, 171.1, 199.9);
    ctx.closePath();
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(254.6, 127.3);
    ctx.bezierCurveTo(254.6, 129.4, 252.9, 131.1, 250.8, 131.1);
    ctx.bezierCurveTo(248.7, 131.1, 247.0, 129.4, 247.0, 127.3);
    ctx.bezierCurveTo(247.0, 125.2, 248.7, 123.5, 250.8, 123.5);
    ctx.bezierCurveTo(252.9, 123.5, 254.6, 125.2, 254.6, 127.3);
    ctx.closePath();
    ctx.fill();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(295.8, 111.7);
    ctx.lineTo(289.1, 103.6);
    ctx.bezierCurveTo(288.4, 102.7, 287.2, 102.2, 286.0, 102.3);
    ctx.lineTo(275.5, 103.2);
    ctx.bezierCurveTo(272.4, 103.4, 270.4, 100.1, 272.1, 97.5);
    ctx.lineTo(277.7, 88.6);
    ctx.bezierCurveTo(278.4, 87.6, 278.5, 86.3, 278.0, 85.2);
    ctx.lineTo(273.9, 75.5);
    ctx.bezierCurveTo(272.7, 72.7, 275.3, 69.7, 278.3, 70.5);
    ctx.lineTo(288.4, 73.1);
    ctx.bezierCurveTo(289.6, 73.5, 290.9, 73.2, 291.8, 72.4);
    ctx.lineTo(299.7, 65.5);
    ctx.bezierCurveTo(302.1, 63.5, 305.7, 65.0, 305.8, 68.1);
    ctx.lineTo(306.5, 78.6);
    ctx.bezierCurveTo(306.5, 79.8, 307.2, 80.9, 308.2, 81.5);
    ctx.lineTo(317.2, 86.9);
    ctx.bezierCurveTo(319.9, 88.5, 319.5, 92.4, 316.7, 93.5);
    ctx.lineTo(306.9, 97.4);
    ctx.bezierCurveTo(305.8, 97.8, 304.9, 98.8, 304.6, 100.0);
    ctx.lineTo(302.3, 110.2);
    ctx.bezierCurveTo(301.6, 113.2, 297.7, 114.1, 295.8, 111.7);
    ctx.closePath();
    ctx.fillStyle = "rgb(75, 194, 240)";
    ctx.fill();

    // calque1/Trac
    ctx.globalAlpha = alpha * 0.78;
    ctx.beginPath();
    ctx.moveTo(282.9, 74.6);
    ctx.bezierCurveTo(293.3, 78.6, 294.9, 74.3, 298.3, 71.0);
    ctx.lineWidth = 3.0;
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.stroke();

    // calque1/Trac
    ctx.globalAlpha = alpha * 1.00;
    ctx.beginPath();
    ctx.moveTo(261.0, 454.1);
    ctx.lineTo(185.6, 359.5);
    ctx.strokeStyle = "rgb(244, 210, 154)";
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(268.0, 428.2);
    ctx.lineTo(167.2, 305.9);
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(275.4, 401.0);
    ctx.lineTo(165.1, 269.6);
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(283.8, 379.2);
    ctx.lineTo(192.9, 269.6);
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(292.5, 350.1);
    ctx.lineTo(225.7, 269.6);
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(299.8, 329.0);
    ctx.lineTo(251.0, 270.2);
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(307.0, 306.4);
    ctx.lineTo(274.9, 269.6);
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(313.8, 284.7);
    ctx.lineTo(300.6, 269.6);
    ctx.stroke();

    // calque1/Groupe

    // calque1/Groupe/Trac
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(159.9, 290.0);
    ctx.lineTo(180.7, 266.6);
    ctx.strokeStyle = "rgb(245, 211, 154)";
    ctx.stroke();

    // calque1/Groupe/Trac
    ctx.beginPath();
    ctx.moveTo(168.2, 314.7);
    ctx.lineTo(206.7, 266.6);
    ctx.stroke();

    // calque1/Groupe/Trac
    ctx.beginPath();
    ctx.moveTo(174.7, 335.3);
    ctx.lineTo(230.7, 266.6);
    ctx.stroke();

    // calque1/Groupe/Trac
    ctx.beginPath();
    ctx.moveTo(184.3, 361.2);
    ctx.lineTo(260.3, 266.6);
    ctx.stroke();

    // calque1/Groupe/Trac
    ctx.beginPath();
    ctx.moveTo(191.4, 386.9);
    ctx.lineTo(289.3, 266.6);
    ctx.stroke();

    // calque1/Groupe/Trac
    ctx.beginPath();
    ctx.moveTo(202.6, 415.6);
    ctx.lineTo(313.6, 266.6);
    ctx.stroke();

    // calque1/Groupe/Trac
    ctx.beginPath();
    ctx.moveTo(213.5, 447.8);
    ctx.lineTo(296.9, 324.8);
    ctx.stroke();

    // calque1/Groupe/Trac
    ctx.beginPath();
    ctx.moveTo(222.1, 473.5);
    ctx.lineTo(272.9, 398.7);
    ctx.stroke();

    // calque1/Trac
    ctx.restore();
    ctx.beginPath();
    ctx.moveTo(254.1, 471.4);
    ctx.lineTo(198.4, 398.7);
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(246.8, 493.1);
    ctx.lineTo(213.5, 444.8);
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(229.8, 494.5);
    ctx.lineTo(259.2, 451.2);
    ctx.strokeStyle = "rgb(245, 211, 154)";
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(154.2, 271.2);
    ctx.strokeStyle = "rgb(244, 210, 154)";
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(217.2, 383.0);
    ctx.fillStyle = "rgb(239, 192, 98)";
    ctx.fill();
    ctx.lineWidth = 4.0;
    ctx.strokeStyle = "rgb(246, 212, 154)";
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(143.3, 163.5);
    ctx.fill();
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(157.1, 270.8);
    ctx.bezierCurveTo(155.3, 270.8, 154.1, 272.6, 154.7, 274.3);
    ctx.lineTo(162.2, 296.8);
    ctx.lineTo(236.1, 516.3);
    ctx.bezierCurveTo(236.9, 518.7, 240.3, 518.7, 241.1, 516.3);
    ctx.lineTo(316.6, 274.2);
    ctx.bezierCurveTo(317.2, 272.5, 315.9, 270.8, 314.2, 270.8);
    ctx.lineTo(157.1, 270.8);
    ctx.closePath();
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(317.5, 271.0);
    ctx.lineTo(151.9, 271.0);
    ctx.bezierCurveTo(148.6, 270.0, 145.9, 267.3, 145.9, 264.0);
    ctx.lineTo(145.9, 262.4);
    ctx.bezierCurveTo(145.9, 259.1, 148.6, 256.4, 151.9, 256.4);
    ctx.lineTo(317.5, 256.4);
    ctx.bezierCurveTo(320.8, 256.4, 323.5, 259.1, 323.5, 262.4);
    ctx.lineTo(323.5, 264.0);
    ctx.bezierCurveTo(323.5, 267.3, 320.8, 270.0, 317.5, 271.0);
    ctx.closePath();
    ctx.fill();
    ctx.lineWidth = 3.0;
    ctx.strokeStyle = "rgb(219, 165, 68)";
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(319.8, 273.6);
    ctx.lineTo(150.1, 273.6);
    ctx.bezierCurveTo(146.7, 272.3, 143.9, 268.8, 143.9, 264.5);
    ctx.lineTo(143.9, 262.5);
    ctx.bezierCurveTo(143.9, 258.2, 146.7, 254.7, 150.1, 254.7);
    ctx.lineTo(319.8, 254.7);
    ctx.bezierCurveTo(323.2, 254.7, 326.0, 258.2, 326.0, 262.5);
    ctx.lineTo(326.0, 264.5);
    ctx.bezierCurveTo(326.0, 268.8, 323.2, 272.3, 319.8, 273.6);
    ctx.closePath();
    ctx.strokeStyle = "rgb(245, 211, 154)";
    ctx.stroke();
    ctx.restore();
}
