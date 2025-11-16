import api from '../../lib/axios'

export const createButtonHandler = async (titleInput, contentInput, navigate) => {
  console.log("CreateButton is clicked")
  
  try {
    const response = await api.post('/notes', {
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
