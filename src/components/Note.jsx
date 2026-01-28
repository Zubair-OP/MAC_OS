import Window from './Windows'
import Markdown from "react-markdown"
import { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'



const Note = () => {

    const [note, setnote] = useState(null)

    useEffect(() => {
        fetch('/note.txt')
            .then(res => res.text())
            .then(data => setnote(data))
    }, [])
    return (
        <Window name="note">
            <div className="note h-full overflow-y-scroll w-full red-scrollbar p-3 text-white/90 text-xs">
                {note ? <SyntaxHighlighter style={atelierDuneDark}>{note}</SyntaxHighlighter> : <p>...loading</p>}
            </div>
        </Window>
    )
}

export default Note