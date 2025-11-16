import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
import NoteBoard from '../components/NoteBoard'

const HomePage = () => {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/notes`)
        setNotes(response.data)
        setError(null)
      } catch (err) {
        console.error('Error fetching notes:', err)
        setError('Failed to load notes')
      } finally {
        setLoading(false)
      }
    }

    fetchNotes()
  }, []) // Empty dependency array means this runs once on mount

  if (loading) {
    return (
      <div className="min-h-screen bg-base-100">
        <NavBar />
        <div className="flex justify-center items-center h-64">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-base-100">
        <NavBar />
        <div className="flex justify-center items-center h-64">
          <p className="text-error text-lg">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-100">
      <NavBar />
      <NoteBoard notes={notes} />
    </div>
  )
}

export default HomePage