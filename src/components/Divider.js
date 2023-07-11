import React, { useEffect } from 'react';
import { isMobile } from 'react-device-detect';

const Divider = () => {

    useEffect(() => {
        const textPath = document.querySelector("textPath");

        const root = document.documentElement,
            body = document.body,
            scrolltotop = 'scrollTop',
            height = 'scrollHeight';

        var timer = null;

        window.addEventListener('scroll', function () {
            if (timer !== null) {
                clearTimeout(timer);
                let percent = (root[scrolltotop] || body[scrolltotop]) / ((root[height] || body[height]) - root.clientHeight) * 100;
                textPath.setAttribute("startOffset", (percent * - 85) + 2200);
                document.getElementById("divider").style.filter = "url(#distort)";
            }
            timer = setTimeout(function () {
                document.getElementById("divider").style.filter = "url(#glow)";
            }, 150);
        }, false);
    }, []);

    return (
        <>
            <svg>
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="10" result="glow" />
                        <feTurbulence baseFrequency="0.01 0.01" numOctaves="1" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="R" result="displacement"/>
                        <feMerge>
                            <feMergeNode in="glow" />
                            <feMergeNode in="displacement" />
                        </feMerge>
                    </filter>
                    <filter id="distort">
                        <feGaussianBlur stdDeviation="10" result="glow" />
                        <feTurbulence type="fractalNoise" baseFrequency="0 0.1" numOctaves="2" seed="2" stitchTiles="noStitch" x="-100%" y="0%" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="R" result="displacement" />
                        <feMerge>
                            <feMergeNode in="glow" />
                            <feMergeNode in="displacement" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>


            <svg width="100%" height="18vw" viewBox="100 0 948.72 60.55">
                <path
                    id="curve"
                    fill="transparent"
                    d="M0.17,0.23c0,0,105.85,77.7,276.46,73.2s243.8-61.37,408.77-54.05c172.09,7.64,213.4,92.34,413.28,64.19"
                />
                <text
                    width="100%"
                    style={{
                        fontSize: `${isMobile ? '6vh' : '3.5vh'}`,
                        transform: "translate3d(0,0,0)",
                    }}
                >
                    <textPath
                        alignmentBaseline="top"
                        href="#curve"
                        id="divider"
                    >
                        <tspan className='dividertext1'>
                            {" • More of My Works Below • "}
                        </tspan>
                        <tspan className='dividertext2'>
                            {"Mae Kristine Vannirrie Sarmiento Portfolio"}
                        </tspan>
                        <tspan className='dividertext1'>
                            {" • More of My Works Below • "}
                        </tspan>
                        <tspan className='dividertext2'>
                            {"Mae Kristine Vannirrie Sarmiento Portfolio"}
                        </tspan>
                        <tspan className='dividertext1'>
                            {" • More of My Works Below • "}
                        </tspan>
                        <tspan className='dividertext2'>
                            {"Mae Kristine Vannirrie Sarmiento Portfolio"}
                        </tspan>
                        <tspan className='dividertext1'>
                            {" • More of My Works Below • "}
                        </tspan>
                        <tspan className='dividertext2'>
                            {"Mae Kristine Vannirrie Sarmiento Portfolio"}
                        </tspan>
                        <tspan className='dividertext1'>
                            {" • More of My Works Below • "}
                        </tspan>
                        <tspan className='dividertext2'>
                            {"Mae Kristine Vannirrie Sarmiento Portfolio"}
                        </tspan>
                    </textPath>
                </text>
            </svg>
        </>
    );
};

export default Divider;
