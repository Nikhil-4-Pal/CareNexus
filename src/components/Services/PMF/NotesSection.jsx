import React from 'react'
import {Link} from 'react-router-dom'
import { noteslist } from './notes'
import Notescard from './Notescard'

function NotesSection() {
  return (
    <div className=' w-full h-full flex flex-col items-center  ' >
        <Notescard notename={"here is the note title"}  content1={'this is content 1'} content2={'this is content 1'} content3={'this is content 1'} />
    </div>
  )
}

export default NotesSection