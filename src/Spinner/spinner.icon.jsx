function SpinnerIcon({ colorHex }) {
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

      <g strokeWidth="16">
        <path stroke="url(#spinner-secondHalf)" d="M 8 100 A 92 92 0 0 1 192 100" />
        <path stroke="url(#spinner-firstHalf)" d="M 192 100 A 92 92 0 0 1 8 100" />
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