import { useEffect, useRef, useState } from 'react';
import { select } from 'd3-selection';
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState([24, 30, 45, 70, 26]);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = select(svgRef.current);

    svg
      .selectAll("cicle")
      .data(data)
      .join(
        (enter) => enter.append("circle"),
        (update) => update.attr("class", "updated"),
        (exit) => exit.remove()
      )
      .attr("r", (value) => value)
      .attr("cx", (value) => value * 2)
      .attr("cy", (value) => value * 3)
      .attr("stroke", "red");

  }, [data])
  const removeAll = () => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .remove();

  }
  return (
    <div className="App">
      <svg ref={svgRef} style={{width : '100%', height : '90%'}}/>
      <button type="button" onClick={() => {setData(data.map(el => el + 5))}}>Increase + 5</button>
      <button type="button" onClick={() => {setData(data.filter(el => el > 35))}}>Filter circle r should gt 35</button>
      <button type="button" onClick={removeAll}>Delete</button>
    </div>
  );
}

export default App;
