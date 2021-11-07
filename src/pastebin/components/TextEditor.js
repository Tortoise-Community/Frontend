import React, {useState} from 'react';
import "./styles/TextEditor.scss";

export default function TextEditor({editable}) {

    const [body, setBody] = useState('');

    return (
        <div className="paste-bin">
                <div class="editor">
                    <div className="line-nos user-select-none"><span>1</span></div>
                    <textarea className="w-100" onChange={e => setBody(e.target.value)}/>
                </div>
        </div>
    )
}