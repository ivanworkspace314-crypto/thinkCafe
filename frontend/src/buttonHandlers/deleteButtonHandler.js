import api from '../../lib/axios'

export const deleteButtonHandler = async (id, navigate) => {
  console.log("DeleteButton is clicked")
  console.log(`id: ${id}`)
  try {
    const response = await api.delete(`/notes/${id}`)
    console.log('Note deleted successfully:', response.data)
    
    // If already on home page, refresh; otherwise redirect
    if (window.location.pathname === '/') {
      window.location.reload()
    } else {
      navigate('/')
    }
  } catch (error) {
    console.error('Error deleting note:', error)
    // TODO: Add error notification
  }
}
