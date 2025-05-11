import { useState } from 'react';
import './App.css';
import MySlider from './MySlider';

function App() {
  const [rgb, setRgb] = useState({ r: 255, g: 255, b: 255 });

  const handleRgbChange = (color, value) => {
    setRgb((prev) => ({ ...prev, [color]: value }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>歡迎使用我的 React 網頁</h1>
        <p>學號：5b1g0009 | 姓名：李英豪</p>
        <div
          className="color-box"
          style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}
        >
          顏色預覽
        </div>
        <div className="slider-container">
          <MySlider
            label="紅色"
            color="r"
            value={rgb.r}
            onChange={handleRgbChange}
          />
          <MySlider
            label="綠色"
            color="g"
            value={rgb.g}
            onChange={handleRgbChange}
          />
          <MySlider
            label="藍色"
            color="b"
            value={rgb.b}
            onChange={handleRgbChange}
          />
        </div>
      </header>
    </div>
  );
}

export default App;