import React from 'react';
import "./styles/TextEditor.scss";

export default function TextEditor() {
    return (
        <div className="container-fluid paste-bin">
            <textarea className="text-editor"/>
        </div>
    )
}