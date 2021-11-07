import React, {useState} from 'react';
import "./styles/TextEditor.scss";

export default function TextEditor({editable}) {

    const [numberBlocks, setNumberBlocks] = useState([1]);

    function EditorLine({numberBlocks}){
        return (
            <div className="line-nos user-select-none">
                {numberBlocks.map(block => <span>{block}</span>)}
            </div>
        )
    }

    const bodyHandler = value => {
            let lineBreaks = value.match(/\n/gi) || [];
            let numOfLines = lineBreaks.length ? lineBreaks.length + 1 : 1;
            setNumberBlocks(Array.from({length: numOfLines}, (_, i) => i + 1))
        }


    return (
        <div className="paste-bin">
                <div className="editor">
                    <EditorLine numberBlocks={numberBlocks}/>
                    <textarea className="w-100" onChange={e => bodyHandler(e.target.value)}/>
                </div>
        </div>
    )
}