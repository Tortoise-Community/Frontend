import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectSection from "../sections/ProjectSection";

function Index() {
    return (
        <div>
            <Header>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-8 p-4 order-1">
                            <br/><br/><br/>
                            <h3 className="text-uppercase front-header m-2">Who are we?</h3><br/>
                            <p className="front-quote m-2"> Tortoise is a community of Beginner to Advanced programmers focusing on Python.<br/>
                                We welcome programmers of all experience levels and have an active and friendly team of staff and members always willing to help you with anything.<br/><br/>
                                We also have few open source project that makes use of the latest technologies, so if you are looking forward to learning the stack
                                or contribute to open source projects, all of that is welcome here.</p>
                            <button className="btn btn-outline-primary m-2">Join now <i className="bi bi-arrow-right-short"/></button>
                        </div>
                    </div>
                </div>
            </Header>
            <ProjectSection/>
            <Footer/>
        </div>
    );
}

export default Index;