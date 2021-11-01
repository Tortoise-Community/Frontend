import React from "react";
import "./styles/Section.scss";

export default function Section({title, children, bs_classes}){
    return (
        <section className={`section ${bs_classes}`}>
            <div className="container-lg px-8">
                <div className="section-header">
                    <div className="section-title normal">
                        <h2>{title}</h2>
                    </div>
                </div>
                {children}
            </div>
        </section>
    )
}
