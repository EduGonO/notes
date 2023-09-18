import {Note} from 'app/interfaces/note'
import React from 'react'
import {NoteMarkdown} from './note-markdown'

interface Props {
  note: Note
  onClickBacklink?: (event: React.MouseEvent, path: string) => void
}

export const NoteLinks: React.FC<Props> = ({note, onClickBacklink}) => {
  console.log('Linked From Notes:', note.linkedFromNotes);
  if (!note.linkedFromNotes?.length) return null

  return (
    <div className="bg-gray-100 rounded-md px-3 py-5">
      <h3 className="text-gray-600 text-lg font-medium">note mentions</h3>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-3">
        {note.linkedFromNotes.map((note) => (
          <div
            key={note.path}
            onClick={(event) => onClickBacklink?.(event, note.path)}
            className="text-gray-600 cursor-pointer block space-y-1"
          >
            <h3 className="text-sm font-medium">{note.title}</h3>

            <NoteMarkdown
              onClickBacklink={onClickBacklink}
              markdown={note.snippet}
              size="sm"
              style={{
                display: 'box',
                lineClamp: 4,
                boxOrient: 'vertical',
                overflow: 'hidden',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
