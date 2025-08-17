import React from "react";

export default function BrandIcon() {
  return (
    <>
      <style jsx>{`
        #brand path {
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          animation: animate 8s ease-in-out forwards infinite;
          transition: all 0.5s ease-in-out;
        }

        @keyframes animate {
          0% {
            stroke-dashoffset: 0;
            stroke-dasharray: 500;
          }
          50% {
            stroke-dashoffset: 500;
            stroke-dasharray: 100;
          }
          100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 500;
          }
        }

        #brand stop:nth-child(1) {
          animation: gradient 4s ease infinite alternate;
        }

        #brand stop:nth-child(2) {
          animation: gradient 4s ease infinite;
        }

        @keyframes gradient {
          0% {
            stop-color: #a293ff;
          }
          50% {
            stop-color: #00f0ff;
          }
          100% {
            stop-color: #a293ff;
          }
        }

        #brand:hover > * {
          animation-play-state: paused;
        }
      `}</style>

      <svg
        id="brand"
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="80"
        viewBox="0 0 200 200"
        fill="none"
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A293FF" />
            <stop offset="100%" stopColor="#00F0FF" />
          </linearGradient>
        </defs>

        {/* Shield background */}
        <path
          d="M20 20 Q100 0 180 20 L180 150 Q100 190 20 150 Z"
          fill="url(#gradient)"
          stroke="#000"
          strokeWidth="3"
        />

        {/* SG letters */}
        <text
          x="42"
          y="125"
          fontFamily="Arial Black"
          fontSize="85"
          fill="white"
          letterSpacing="5"
        >
          SG
        </text>
      </svg>
    </>
  );
}
