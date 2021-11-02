import React from "react";
import "./styles/ProjectItem.scss";

/*Credits
* Design for this component was inspired from the python discord website
* https://www.pythondiscord.com/
* Repository: https://github.com/python-discord/site
* Recreated with bootstrap
*/

export default function ProjectItem({data, loading}) {
    return (
            <div className="card pt-md-3 px-md-2 pb--3 w-100">
                {!loading ?
                    <div>
                        <a className="stretched-link" href={data.github}><h5 className="card-header bg-transparent">
                            <i className="fab fa-github"/> {data.name}</h5></a>
                        <div className="card-body">
                            <p className="card-text text-dark">{data.short_desc}</p>
                        </div>
                        <div className="card-footer bg-transparent mb--3">
                            <ul className="list-inline">
                            <li className="list-inline-item"><i className="fa fa-circle python"/> {data.language}</li>
                            <li className="list-inline-item"><i className="fa fa-star"/> {data.stars}</li>
                            <li className="list-inline-item"><i className="fa fa-code-fork"/> {data.forks}</li>
                            <li className="list-inline-item"><i className="fa fa-history"/> {data.commits}</li>
                            </ul>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-5">
                                    <div className="inner-card animate-pulse"/>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12">
                                    <div className="inner-card animate-pulse"/>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer bg-transparent mb--3">
                            <div className="row mt-3">
                                <div className="col-3">
                                    <div className="inner-card animate-pulse"/>
                                </div>
                                <div className="col-3">
                                    <div className="inner-card animate-pulse"/>
                                </div>
                                <div className="col-3">
                                    <div className="inner-card animate-pulse"/>
                                </div>
                                <div className="col-3">
                                    <div className="inner-card animate-pulse"/>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
    )
}
