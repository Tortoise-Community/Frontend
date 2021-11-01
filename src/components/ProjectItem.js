import React from "react";
import "./styles/ProjectItem.scss";

export default function ProjectItem(item) {
    return (
        // TODO: Refactor later.
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="card pt-md-3 px-md-2 pb--3">
                <a className="stretched-link" href="#"><h5 className="card-header bg-transparent">
                    <i className="fab fa-github"></i> {item.data.name}</h5></a>
                <div className="card-body">
                    <p className="card-text text-dark">{item.data.short_desc}</p>
                </div>
                <div className="card-footer bg-transparent mb--3">
                    <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-circle python"></i> {item.data.language}</li>
                        <li className="list-inline-item"><i className="fa fa-star"></i> {item.data.stars}</li>
                        <li className="list-inline-item"><i className="fa fa-code-fork"></i> {item.data.forks}</li>
                        <li className="list-inline-item"><i className="fa fa-history"></i> {item.data.commits}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}