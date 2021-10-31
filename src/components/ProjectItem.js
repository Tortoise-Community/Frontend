import React from "react";
import "./styles/ProjectItem.scss";

export default function ProjectItem(data) {
    console.log(data);

    return (
        // TODO: Refactor later.
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="card pt-md-3 px-md-2 pb--3">
                <a className="stretched-link" href="#"><h5 className="card-header bg-transparent">
                    <i className="fab fa-github"></i> Tortoise-Bot</h5></a>
                <div className="card-body">
                    <p className="card-text text-dark">With supporting text below as a natural lead-in to additional
                        content.</p>
                </div>
                <div className="card-footer bg-transparent mb--3">
                    <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-circle python"></i> Python</li>
                        <li className="list-inline-item"><i className="fa fa-star"></i> {data.stars}</li>
                        <li className="list-inline-item"><i className="fa fa-code-fork"></i> 34</li>
                        <li className="list-inline-item"><i className="fa fa-history"></i> 34</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}