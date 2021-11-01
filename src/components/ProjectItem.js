import React from "react";
import "./styles/ProjectItem.scss";

export default function ProjectItem({data}) {
    return (
            <div className="card pt-md-3 px-md-2 pb--3">
                <a className="stretched-link" href="#"><h5 className="card-header bg-transparent">
                    <i className="fab fa-github"></i> {data.name}</h5></a>
                <div className="card-body">
                    <p className="card-text text-dark">{data.short_desc}</p>
                </div>
                <div className="card-footer bg-transparent mb--3">
                    <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-circle python"></i> {data.language}</li>
                        <li className="list-inline-item"><i className="fa fa-star"></i> {data.stars}</li>
                        <li className="list-inline-item"><i className="fa fa-code-fork"></i> {data.forks}</li>
                        <li className="list-inline-item"><i className="fa fa-history"></i> {data.commits}</li>
                    </ul>
                </div>
            </div>
    )
}