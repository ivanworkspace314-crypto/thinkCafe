import React from 'react'
import { useParams } from 'react-router'
import PropTypes from 'prop-types'
import CreatePage from './CreatePage'

const NoteDetailPage = props => {
  const { id } = useParams() // Extract the id from URL
  
  return (
    <CreatePage 
      pageTitle="Edit Note" 
      isNoteDetailPage={true}
      noteId={id}
    />
  )
}

NoteDetailPage.propTypes = {}

export default NoteDetailPage