import axios from 'axios'

export const createButtonHandler = async (titleInput, contentInput, navigate) => {
  console.log("CreateButton is clicked")
  
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/notes`, {
      title: titleInput,
      content: contentInput
    })
    console.log('Note created successfully:', response.data)
    navigate('/') // Redirect to home page after successful creation
  } catch (error) {
    console.error('Error creating note:', error)
    // TODO: Add error notification
  }
}
