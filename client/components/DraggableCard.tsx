/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, useEffect } from 'react'

interface Props {
  imageUrl: string
}

export default function DraggableCard({ imageUrl }: Props) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
        })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, offset])

  return (
    <div className="adaptive-cards-container">
      <img
        onMouseDown={(e) => {
          setIsDragging(true)
          setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
          })
        }}
        onMouseUp={() => {
          setIsDragging(false)
        }}
        src={imageUrl}
        alt="cards-based-on-rarity"
        style={{
          width: '3vw',
          position: 'absolute',
          left: `${position.x}px`,
          top: `${position.y}px`,
          cursor: 'grab',
        }}
      />
    </div>
  )
}
