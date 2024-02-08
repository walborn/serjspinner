function SpinnerIcon({ colorHex }) {
  const strokeWidth = 32

  return (
    <svg
      color={colorHex}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      fill="none"
    >
      <defs>
        <linearGradient id="spinner-secondHalf">
          <stop offset="0%" stopOpacity="0" stopColor="currentColor" />
          <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
        </linearGradient>
        <linearGradient id="spinner-firstHalf">
          <stop offset="0%" stopOpacity="1" stopColor="currentColor" />
          <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
        </linearGradient>
      </defs>

      <g strokeWidth={strokeWidth}>
        <path
          stroke="url(#spinner-secondHalf)"
          d={`M ${strokeWidth/2} 100 A ${100 - strokeWidth/2} ${100 - strokeWidth/2} 0 0 1 ${200 - strokeWidth/2} 100`}
        />
        <path
          stroke="url(#spinner-firstHalf)"
          d={`M ${200 - strokeWidth/2} 100 A ${100 - strokeWidth/2} ${100 - strokeWidth/2} 0 0 1 ${strokeWidth/2} 100`}
        />
      </g>
      <animateTransform
        from="0 0 0"
        to="360 0 0"
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1300ms"
      />
    </svg>
  );
}

export default SpinnerIcon