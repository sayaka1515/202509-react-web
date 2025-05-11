import React from 'react';

function MySlider({ label, color, value, onChange }) {
  return (
    <div className="slider">
      <label>{label}: {value}</label>
      <input
        type="range"
        min="0"
        max="255"
        value={value}
        onChange={(e) => onChange(color, parseInt(e.target.value))}
      />
    </div>
  );
}

export default MySlider;