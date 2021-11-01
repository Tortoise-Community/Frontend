import React from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";


export default function Rules(){
    return (
        <div>
            <Header/>
            <Section title={"Rules"} bs_classes={"pb-3"}>

                <p style={style.paragraph}>We impose a strict set of rules that all users, joining Tortoise Community or any of our partner servers, servers under Tortoise Community, are obliged to follow. Violation of them will result in Infraction whichever deemed necessary by the Moderators..</p>
                <ol>
                    <li>Follow Discord Community Guidelines and Terms of Service.</li>
                    <li>Don't use Racial, Homophobic or Transphobic slurs that are abusive. Respect all staff and members.</li>
                    <li>No unapproved advertising, including requests for paid work. Projects can be showcased in #project-showcase.</li>
                    <li>Do not spam or use automated user accounts (self-bots) inside the server.</li>
                    <li>Do not try to mention <span style={style.span}>@everyone</span>, or unnecessarily ping members/roles. You should mostly never ping members who are not present in the current discussion, unless they've previously given you permission.</li>
                    <li>Don't mention staff unless its an emergency or serious rule break. If you wish to ask them a question, or report something use Mod Mail (DM <span style={style.span}>@Tortoise Bot</span>)</li>
                    <li>Keep discussions relevant to channel topics, Do not post your questions in the general chat, Instead use the help channels allocated for them.</li>
                    <li>No NSFW contents are allowed inside the server. Posting NSFW content will result in an immediate Infraction.</li>
                    <li>Do not DM members without getting their permission first. If you want coding help, use the help channels.</li>
                </ol>
            </Section>
            <Section title={"Infractions"} bs_classes={"pt-0 pb-5"}>
                <p style={style.paragraph}>We have a few types of infractions. The severity of the actions will decide the infraction type for the user.</p>
                <ol>
                    <li>An attached verbal warning.</li>
                    <li>Short temporary mute</li>
                    <li>Long temporary mute</li>
                    <li>A short temporary ban from the server</li>
                    <li>A long temporary ban from the server</li>
                    <li>A permanent ban from the server and from using all our services.</li>
                </ol>
            </Section>
            <Footer/>
        </div>
    )
}

const style = {
    paragraph: {
        fontSize: 17,
        fontFamily: "Sofia Pro, san-serif",
    },
    span: {
        color: "#000",
        fontWeight: "bold"
    }
}