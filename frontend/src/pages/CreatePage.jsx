import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import api from '../../lib/axios'
import PageHeader from '../components/PageHeader'
import FormField from '../components/FormField'
import Button from '../components/Buttons/Button'
import { createButtonHandler, deleteButtonHandler, putButtonHandler } from '../buttonHandlers'

const CreatePage = (props) => {
  const navigate = useNavigate()
  const [titleInput, setTitleInput] = useState("")
  const [contentInput, setContentInput] = useState("")
  const [loading, setLoading] = useState(false)

  // Fetch note details if noteId exists (edit mode)
  useEffect(() => {
    if (props.noteId) {
      const fetchNoteDetails = async () => {
        try {
          setLoading(true)
          const response = await api.get(`/notes/${props.noteId}`)
          const { title, content } = response.data
          setTitleInput(title)
          setContentInput(content)
        } catch (error) {
          console.error('Error fetching note details:', error)
        } finally {
          setLoading(false)
        }
      }
      
      fetchNoteDetails()
    }
  }, [props.noteId])
  
  const handleCreate = () => {
    createButtonHandler(titleInput, contentInput, navigate)
  }

  const handleUpdate = () => {
    putButtonHandler(props.noteId, titleInput, contentInput, navigate)
  }
  const handleDelete = ()=>{
    deleteButtonHandler(props.noteId,navigate)
  }
  const handleSubmit = (e) => {
    console.log("button is pressed");
    e.preventDefault()
    // TODO: Add note creation logic
  }
  
  const handleTitleChange = (e) => {
    setTitleInput(e.target.value)
  }
  
  const handleContentChange = (e) => {
    setContentInput(e.target.value)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-base-100 flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-100">
      <div className="mx-auto max-w-4xl px-4 py-6">
        <PageHeader 
          backLink="/" 
          backText="Back to Notes"
          haveDeleteButton={props.isNoteDetailPage}
          deleteOnclick={handleDelete}
        >
          {props.pageTitle}
        </PageHeader>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField 
            label="Title"
            type="text"
            placeholder="Enter note title..."
            onChange={handleTitleChange}
            inputValue={titleInput}
            required
          />

          <FormField 
            label="Content"
            type="textarea"
            placeholder="Enter note content..."
            onChange={handleContentChange}
            inputValue={contentInput}
            required
          />

          {/* Submit button - bottom right */}
          {props.isNoteDetailPage ? (
            <Button onClick={handleUpdate} type="submit">Save Note</Button>
          ) : (
            <Button onClick={handleCreate} type="submit">Create New Note</Button>
          )}
        </form>
      </div>
    </div>
  )
}

export default CreatePage