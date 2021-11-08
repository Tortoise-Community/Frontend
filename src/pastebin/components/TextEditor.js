import React, {useState} from 'react';
import "./styles/TextEditor.scss";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function TextEditor({editable}) {

    const [numberBlocks, setNumberBlocks] = useState([1]);
    const [body, setBody] = useState('');

    function EditorLine({numberBlocks}){
        return (
            <div className="line-nos user-select-none">
                {numberBlocks.map(block => <span>{block}</span>)}
            </div>
        )
    }

    const bodyHandler = value => {
            setBody(value);
            let lineBreaks = value.match(/\n/gi) || [];
            let numOfLines = lineBreaks.length ? lineBreaks.length + 1 : 1;
            setNumberBlocks(Array.from({length: numOfLines}, (_, i) => i + 1))
        }


    return (
        <div className="paste-bin">
                <div className="editor">
                    <EditorLine numberBlocks={numberBlocks}/>
                    <textarea className="w-100 text-input" spellCheck="false" onChange={e => bodyHandler(e.target.value)}/>
                       <SyntaxHighlighter style={atomOneDark} className="text-output">
                          {body}
                        </SyntaxHighlighter>
                </div>
        </div>
    )
}