import './App.css'
import Plot from 'react-plotly.js'

const generateZ = () => {
  const z: number[][] = [];
  for (let i = 0; i < 25; i++) {
    const row: number[] = [];
    for (let j = 0; j < 25; j++) {
      const x = i / 5;
      const y = j / 5;
      row.push(Math.sin(x) * Math.cos(y)); // 3D wave pattern
    }
    z.push(row);
  }
  return z;
};

function App() {
 return  (
     <div style={{ padding: 20 }}>
      <h1>3D Surface Plot</h1>
      <Plot
        data={[
          {
            type: 'surface',
            z: generateZ(),
            colorscale: 'Viridis',
          },
        ]}
        layout={{
          width: 700,
          height: 500,
          title: { text: 'z = sin(x) · cos(y)' },
          scene: {
            xaxis: { title: { text: 'X' } },
            yaxis: { title: { text: 'Y' } },
            zaxis: { title: { text: 'Z' } },
          },
        }}
      />
    </div>
 ) 
}

export default App
