import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectSection from "../sections/ProjectSection";

function Index() {
    return (
        <div>
            <Header>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4">
                        </div>
                        <div className="col-xl-7 col-lg-8 p-4 order-1">
                            <h1 className="text-uppercase front-header m-2">Tortoise Python Community</h1><br/>
                            <p className="front-quote m-2">"We called him Tortoise because he taught us!"</p>
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