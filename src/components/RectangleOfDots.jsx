import { motion } from 'framer-motion';

// the dots component
function Dot() {
  return (
    <div
      style={{
        width: '7px',
        height: '7px',
        backgroundColor: '#cbd5e1',
        borderRadius: '50%',
        background: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',
      }}
    ></div>
  );
}

// the grid with the dots
function DotGrid({ rows, cols }) {
  const grid = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid.push(<Dot key={`${i}-${j}`} />);
    }
  }

  return (
    <div
      style={{
        display: 'grid',
        gap: '10px',
        gridTemplateColumns: `repeat(${cols},7px)`,
        gridTemplateRows: `repeat(${rows}, 7px)`,
      }}
    >
      {grid}
    </div>
  );
}

function RectangleOfDots() {
  return <DotGrid rows={20} cols={30} />;
}

export default RectangleOfDots;
