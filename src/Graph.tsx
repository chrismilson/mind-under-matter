import React, { useMemo } from 'react'
import { physicalToMental } from './age'
import useDrawingCanvas, { DrawingMethod } from 'react-hooks-use-drawing-canvas'

const drawGraph = (highlight: number): DrawingMethod => {
  return (ctx, widthPX, heightPX) => {
    const width = Math.max(highlight * 2, 100)
    const height = Math.floor(9 * Math.log10(width))

    // draw the graph
    ctx.save()
    // we want to show the years from 1 to 100 evenly across the page
    ctx.setTransform(widthPX / width, 0, 0, -heightPX / height, 0, heightPX)
    ctx.beginPath()
    ctx.moveTo(0, 0)
    for (let i = 0; i <= width; i++) {
      ctx.lineTo(i, physicalToMental(i))
    }
    ctx.moveTo(0, 0)
    ctx.closePath()
    ctx.miterLimit = 1
    ctx.stroke()
    ctx.restore()

    // draw the highlight
    ctx.save()
    ctx.beginPath()
    ctx.arc(
      (highlight * widthPX) / width,
      heightPX - (physicalToMental(highlight) * heightPX) / height,
      7,
      0,
      2 * Math.PI
    )
    ctx.closePath()
    ctx.fillStyle = `rgba(255,255,255,0.6)`
    ctx.fill()
    ctx.lineWidth = 3
    ctx.stroke()

    ctx.restore()

    return () => {
      ctx.clearRect(0, 0, widthPX, heightPX)
    }
  }
}

const Graph: React.FC<{ highlight: number }> = ({ highlight }) => {
  const draw = useMemo(() => {
    return drawGraph(highlight)
  }, [highlight])
  const canvasRef = useDrawingCanvas(draw)

  return <canvas className="Graph" ref={canvasRef} />
}

export default Graph
