import Snap from 'snapsvg-cjs';

function process() {
    let s = Snap('#svgout');
    let sMaxX = 1500, sMaxY = 600;
    let viewBoxList = [0, 0, sMaxX, sMaxY];
    if (!s) return;
    s.attr({ viewBox: viewBoxList });
    let gLines = s.g();
    let gText = s.g();
    let patt;
    let maskObj;
    let text;
    let maskElem = s.mask();
    let pSize = 700;
    let maxLines = 16;
    let maxLinesDouble = maxLines * 2;
    let lineStep = pSize / maxLines;
    let lines = [];
    let pathDur = 1000;
    let delay = 250;
    let colorSteps = maxLines / 2;
    let colors = ['purple',
        'crimson',
        'orangered',
        'orange',
        'gold',
        'yellowgreen',
        'steelblue',
        'teal',
        'purple'
    ]
    let lineLength = Math.sqrt(Math.pow(pSize, 2) * 2);
    let lineObj = function () {
        let d = 'M' + [pSize, 0, 0, pSize];
        let path = s.path(d);
        let pos = 0;
        let addMask = false;
        let pathDelay = 0;
        let dashArray = 0;
        let strokeW = 0;
        this.init = function (params) {
            pos = params.pos;
            strokeW = params.strokeW;
            let strokeColor = params.color || 'hotpink'
            let offsetX = params.offsetX || 0;
            let x = pSize - lineStep * (pos + .5) + offsetX;
            let translateParams = [x, 0];

            pathDelay = params.delay || delay;
            dashArray = lineLength;
            addMask = params.addMask || false;

            path.attr({
                transform: 'translate(' + translateParams + ')',
                'stroke-width': strokeW,
                stroke: strokeColor,
                'stroke-linecap': 'square',
                'stroke-dashoffset': lineLength,
                'stroke-dasharray': dashArray
            });

            gLines.add(path);

        }
        this.reset = function () {
            path.attr({
                'stroke-dashoffset': lineLength,
                'stroke-dasharray': dashArray
            });
        }

        this.animdDelay = function () {
            setTimeout(pathAnim,
                (maxLinesDouble - pos) * pathDelay
            );
        }
        function runNextAnim() {
            if (addMask === true) {
                if (pos === 0) {
                    maskObj.maskAnim();
                }
            }
        }

        function pathAnim() {

            path.animate({
                'stroke-dashoffset': '0'
            },
                pathDur,
                runNextAnim
            );
        }

    }
    function createLines(params) {
        for (let i = 0; i < maxLinesDouble; i++) {
            let line = new lineObj();
            let color = params.color || colors[i % colorSteps];

            line.init({
                pos: i,
                strokeW: params.strokeW,
                offsetX: params.offsetX,
                delay: params.delay,
                addMask: params.addMask || false,
                color: color,
            });

            lines.push(line);
        }
    }

    // ------------------------------------

    function createPattern() {

        //     console.log('* - createPattern');

        let rect = s.rect(0, 0, pSize, pSize);
        rect.attr({
            fill: 'white',
        });

        gLines.add(rect);

        createLines({
            strokeW: lineStep / 1.4,
            addMask: false
        });

        createLines({
            strokeW: 2,
            color: '#002',
            offsetX: lineStep / 2 + 7,
            delay: 300,
            addMask: true
        });

        patt = gLines.toPattern(0, 0, pSize, pSize);

    }

    function animatePattern() {

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];

            line.reset();
            line.animdDelay();
        }
    }

    // ------------------------------------

    let textObj = function () {

        let textDur = 1500;
        let dashoffset = 1200;
        let textGInit = s.g();
        let text1 = s.text('50%', '34%', 'Shubham');
        let text2 = s.text('50%', '73%', 'Panchal');

        text1.attr({
            dy: '.3em',
            'font-size': '1.15em'
        });
        text2.attr({
            dy: '.3em'
        });

        textGInit.add(text1, text2);

        textGInit.attr({
            'text-anchor': 'middle',
            'font': '15em/1 Impact',
            fill: 'white',
            stroke: '#000',
            'stroke-width': 3,
            'stroke-dasharray': dashoffset,
            'stroke-dashoffset': dashoffset
        });

        let textGFill = textGInit.clone();

        textGInit.attr({
            transform: 'translate(10,10)'
        });

        gText.add(textGInit, textGFill);

        this.textAnim = function () {
            textGFill.animate({
                'stroke-dashoffset': 0
            },
                textDur,
                setTextStroke);
        }

        function setTextStroke() {
            setTextFill();

            textGInit.animate({
                'stroke-dashoffset': 0
            },
                textDur
            );
        }

        function setTextFill() {

            animatePattern();

            textGFill.attr({
                fill: patt
            });
        }

        this.reset = function () {

            let initState = {
                fill: 'white',
                'stroke-dasharray': dashoffset,
                'stroke-dashoffset': dashoffset
            };

            textGInit.attr(initState);
            textGFill.attr(initState);

            this.textAnim();
        }
    }

    // ------------------------------------

    function createText() {
        //     console.log('* - createText');
        text = new textObj();
        text.textAnim();
    }

    // ------------------------------------

    let maskObjInit = function () {
        let maskShape;

        let currentStep = 0;
        let steps = [
            { rx: '10%', ry: "10%" },
            { rx: '35%', ry: "35%" },
            { rx: '0%', ry: "0%" }
        ];

        this.init = function () {
            maskShape = s.ellipse('50%', '50%', '100%', '100%');

            maskShape.attr({
                fill: "white"
            });

            maskElem.add(maskShape);

            gText.attr({
                mask: maskElem
            });
        }

        this.maskAnim = function () {
            //         console.log('- * - anim mask');

            if (currentStep === steps.length) {
                setTimeout(reRun, 1000);
                return;
            }

            maskShape.animate(
                steps[currentStep]
                ,
                300,
                maskObj.maskAnim);
            currentStep++;
        }

        this.reset = function () {
            currentStep = 0;

            let initState = {
                rx: '100%',
                ry: "100%"
            };

            maskShape.attr(initState);
        }
    }

    function createMask() {
        //     console.log('* - createMask');
        maskObj = new maskObjInit();
        maskObj.init();
    }

    createPattern();
    createText();
    createMask();

    function reRun() {

        maskObj.reset();
        text.reset();
    }
}

export default function loadAnimation() {
    return new Promise((resolve, reject) => {
        process();
        setTimeout(() => {
            return resolve();
        }, 13 * 1000);
    });
};