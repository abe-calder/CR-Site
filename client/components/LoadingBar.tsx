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
      <p className="loading-info">{progress}% Complete</p>
      <h2 className="loading-info">
        Please make sure to sign in and provide a valid Clash Royale Player Tag
      </h2>
      <p className="loading-info">
        The player tag will look something like this:
      </p>
      <p className="loading-info">
        <strong>#RCURY2U</strong>
      </p>
      <p className="loading-info">
        Please enter the player tag <strong>WITHOUT</strong> the{' '}
        <strong>#</strong> symbol
      </p>
      <h3>
        If you don&apos;t have a Clash Royale account or player tag go to{' '}
        <br></br>the{' '}
        <a id="normal" href="https://royaleapi.com/">
          Royale Api Website{' '}
        </a>
        and search for a player and use their tag
      </h3>
    </div>
  )
}
// @ts-expect-error comments for lines
function ProgressBar({ progress }) {
  return (
    <div
      className="progress-bar-container"
      style={{ width: '80vw', margin: '1.25rem auto' }}
    >
      <div
        className="progress-bar-fill"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}
