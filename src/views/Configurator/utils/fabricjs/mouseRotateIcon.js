// Tagged template
function mouseRotateIcon(angle) {
  const relativeAngle = angle - 90;
  const pos = {
      "-90": "9.25 5.25",
      "-75": "9.972 3.863",
      "-60": "10.84 1.756",
      "-45": "11.972 -1.716",
      "-30": "18.83 0.17",
      "-15": "28.49 -9.49",
      15: "-7.985 46.77",
      30: "-0.415 27.57",
      45: "2.32 21.713",
      60: "3.916 18.243",
      75: "4.762 16.135",
      90: "5.25 14.75",
      105: "5.84 13.617",
      120: "6.084 12.666",
      135: "6.317 12.01",
      150: "6.754 11.325",
      165: "7.06 10.653",
      180: "7.25 10",
      195: "7.597 9.43",
      210: "7.825 8.672",
      225: "7.974 7.99",
      240: "8.383 7.332",
      255: "8.83 6.441",
    },
    defaultPos = "7.25 10";
  const transform =
    relativeAngle === 0
      ? "translate(9.5 3.5)"
      : `rotate(${relativeAngle} ${pos[relativeAngle] || defaultPos})`;
  const imgCursor = encodeURIComponent(`
  <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24'>
    <defs>
      <filter id='a' width='266.7%' height='156.2%' x='-75%' y='-21.9%' filterUnits='objectBoundingBox'>
        <feOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter1'/>
        <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='1'/>
        <feColorMatrix in='shadowBlurOuter1' result='shadowMatrixOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0'/>
        <feMerge>
          <feMergeNode in='shadowMatrixOuter1'/>
          <feMergeNode in='SourceGraphic'/>
        </feMerge>
      </filter>
      <path id='b' d='M1.67 12.67a7.7 7.7 0 0 0 0-9.34L0 5V0h5L3.24 1.76a9.9 9.9 0 0 1 0 12.48L5 16H0v-5l1.67 1.67z'/>
    </defs>
    <g fill='none' fill-rule='evenodd'><path d='M0 24V0h24v24z'/>
      <g fill-rule='nonzero' filter='url(#a)' transform='${transform}'>
        <use fill='#000' fill-rule='evenodd' xlink:href='#b'/>
        <path stroke='#FFF' d='M1.6 11.9a7.21 7.21 0 0 0 0-7.8L-.5 6.2V-.5h6.7L3.9 1.8a10.4 10.4 0 0 1 0 12.4l2.3 2.3H-.5V9.8l2.1 2.1z'/>
      </g>
    </g>
  </svg>`);
  return `url("data:image/svg+xml;charset=utf-8,${imgCursor}") 12 12, crosshair`;
}

export default mouseRotateIcon;
