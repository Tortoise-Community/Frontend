import React from "react";
import "./styles/Header.scss";


export default function Header() {
    return (
        <div className="header row">
                <div className="col">
                    <h5>Tortoise Pastebin</h5>
                </div>
                <div className="col-auto header-controls">
                   <a href="#" data-bs-toggle="tooltip" title="Save (CTRL + S)" data-bs-placement="bottom"><i className="bi bi-clipboard fa-lg"/></a>
                    <a href="#" data-bs-toggle="tooltip" title="New (CTRL + N)" data-bs-placement="bottom"><i className="bi bi-file-earmark-plus fa-lg"/></a>
                    <a href="#" data-bs-toggle="tooltip" title="Duplicate and Edit (CTRL + D)" data-bs-placement="bottom"><i className="bi bi-pencil-square fa-lg"/></a>
                </div>
        </div>
    )
}