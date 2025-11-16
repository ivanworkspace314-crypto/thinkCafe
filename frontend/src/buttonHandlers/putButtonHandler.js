import axios from 'axios'

export const putButtonHandler = async (id, titleInput, contentInput, navigate) => {
  console.log("PutButton is clicked")
  
  try {
    const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/notes/${id}`, {
      title: titleInput,
      content: contentInput
    })
    console.log('Note updated successfully:', response.data)
    navigate('/') // Redirect to home page after successful update
  } catch (error) {
    console.error('Error updating note:', error)
    // TODO: Add error notification
  }
}
