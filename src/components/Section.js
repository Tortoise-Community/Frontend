import React from "react";
import "./styles/Section.css";

export default function Section({title, children}){
    return (
        <section className="section">
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
