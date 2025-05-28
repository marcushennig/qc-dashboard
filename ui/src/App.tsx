import './App.css'
import { useState } from 'react'
import { TextField, Button, Box, Typography } from '@mui/material'
import Plot from 'react-plotly.js'
import { Api } from './api/client';

/**
 * App component that renders a 3D surface plot using Plotly.
 * The plot visualizes the function z = sin(x) * cos(y) over a grid of points.
 * It uses the Plotly library to create an interactive 3D surface plot.
 */
function App() {

  // State variables for input, result, and loading status
  const [input, setInput] = useState<number>(0)
  const [surface, setSurface] = useState<number[][] | null>(null)
  const [cosine, setCosine] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  /**
   * Function to handle the surface data retrieval.
   */
  const handleSurface = async () => {
    setLoading(true)
    try {
      const surfaceData = await Api.surface()
      setSurface(surfaceData)
    } catch (exception) {
      setSurface(null)
    }
    setLoading(false)
  }

  /**
   * Function to handle the cosine calculation.
  */ 
  const handleCosine = async () => {
    
    setLoading(true)
    try {
      const result = await Api.cosine(input)
      setCosine(result)
    } catch (exception) {
      setCosine(NaN)
    }
    setLoading(false)
  }

  return  (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        3D Surface Plot
      </Typography>
      <Plot
        data={[
          {
            type: 'surface',
            z: surface || [],
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
      <Box sx={{ mt: 2, mb: 2 }}>
        <Button
          variant="outlined"
          onClick={handleSurface}
          disabled={loading}
        >
          Load Surface Data
        </Button>
      </Box>
      <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          label="X Value"
          type="number"
          value={input}
          onChange={e => setInput(Number(e.target.value))}
          variant="outlined"
          size="small"
        />
        <Button
          variant="contained"
          onClick={handleCosine}
          disabled={loading}
        >
          Compute Cosine
        </Button>
        {cosine !== null && (
          <Typography sx={{ ml: 2 }}>
            Cosine: {isNaN(cosine) ? 'Error' : cosine}
          </Typography>
        )}
      </Box>
    </Box>
  ) 
}

export default App
