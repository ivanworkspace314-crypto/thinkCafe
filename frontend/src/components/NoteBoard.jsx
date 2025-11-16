import React from 'react'
import Note from './Note'

const NoteBoard = ({ notes }) => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6">
      <h2 className="sr-only">Notes</h2>

      {/* Responsive grid: 1 column mobile, 2 on small, 3 on large */}
      <section
        aria-label="notes"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {notes.map((note, idx) => (
          <Note key={idx} noteID={note._id} date={note.date} title={note.title} body={note.content} />
        ))}
      </section>
    </main>
  )
}

export default NoteBoard
