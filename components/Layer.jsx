const Layer = () => {
  return (
    <svg
      className="absolute min-w-full h-full rounded-[2rem] z-0"
      viewBox="0 0 160 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: 30 }, (_, row) =>
        Array.from({ length: 30 }, (_, col) => (
          <rect
            key={`${row}-${col}`}
            x={col * 6}
            y={row * 6}
            width="5"
            height="5"
            fill="none"
            stroke="black"
            className="grid-pattern"
          />
        ))
      )}
    </svg>
  );
};

export default Layer;
