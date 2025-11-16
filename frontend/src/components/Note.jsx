import React from 'react'
import { Edit, Trash2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router'
import { deleteButtonHandler } from '../buttonHandlers'

// Minimal placeholder Note component — visual placeholder only.
// TODO: Replace with full Note implementation later.
const Note = (props) => {
  const navigate = useNavigate()
  
  const handleDelete = () => {
    deleteButtonHandler(props.noteID, navigate)
  }

return (
    <article className="bg-base-200 rounded-lg p-4 shadow-sm h-40 flex flex-col justify-between m-2 border border-white">
        <h3 className="text-lg font-bold text-base-content truncate">
            {props.title}
        </h3>

        <p className="text-sm text-base-content/80 flex-1 overflow-hidden line-clamp-3">
            {props.body}
        </p>
        
        
    <div className="flex items-center justify-between">
        {props.date}
        <div className="flex gap-2">
            <Link to={`/note/${props.noteID}`} className="btn btn-sm btn-primary">
                <Edit size={16} />
            </Link>
            <button onClick={handleDelete} className="btn btn-sm btn-error">
                <Trash2 size={16} />
            </button>
        </div>
    </div>
    </article>
)
}

export default Note
