import { useState, useEffect } from 'react'
import { FaSpinner, FaCheckCircle } from 'react-icons/fa' // Example icons

export default function LoadingProgress() {
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          setLoading(false)
          return 100
        }
        return prevProgress + 10
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '3.125rem' }}>
      {loading ? (
        <FaSpinner className="spinner-icon" size={40} color="#3f51b5" />
      ) : (
        <FaCheckCircle size={40} color="#4caf50" />
      )}
      <ProgressBar progress={progress} />
      <p>{progress}% Complete</p>
    </div>
  )
}

function ProgressBar({ progress }) {
  return (
    <div className="progress-bar-container" style={{ width: '80vw', margin: '1.25rem auto' }}>
      <div
        className="progress-bar-fill"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}
