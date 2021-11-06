import React, {useState} from 'react';
import "./styles/TextEditor.scss";

export default function TextEditor({editable}) {

    const [body, setBody] = useState('');

    return (
        <div className="paste-bin">
            {editable?
                <textarea className="editor w-100" onChange={e => setBody(e.target.value)}/>
                :
                <div>
                    <div className="line-nos user-select-none"/>
                    <pre>{body}</pre>
                </div>
            }
            }
        </div>
    )
}