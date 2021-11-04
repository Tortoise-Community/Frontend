import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectSection from "../sections/ProjectSection";
import Section from "../components/Section";

function Index() {
    return (
        <div>
            <Header>
                <div className="container d-flex flex-column justify-content-center align-items-center text-center">
                    <h1 className="front-header mt-4">Tortoise Community</h1>
                    <p className="front-quote m-3">"We called him tortoise because he taught us!"</p>
                    <button className="btn btn-outline-primary m-2">Join now <i className="bi bi-arrow-right-short"/></button>
                    <div className="spacer m-5"/>
                </div>
            </Header>
            <Section no_border={true} bs_classes={"mb--5"}>
                <div className={"row"}>
                    <div className="col-lg-10 col-md-10 col-sm-12">
                        <h1 className="text-uppercase">Who are we?</h1><br/>
                        <p className=""> Tortoise is a community of Beginner to Advanced programmers focusing on Python.<br/>
                            We welcome programmers of all experience levels and have an active and friendly team of staff and members always willing to help you with anything.<br/><br/>
                            We also have few open source project that makes use of the latest technologies, so if you are looking forward to learning the stack
                            or contribute to open source projects, all of that is welcome here.</p>
                    </div>
                </div>
            </Section>
            <ProjectSection/>
            <Footer/>
        </div>
    );
}

export default Index;