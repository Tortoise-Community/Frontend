import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectSection from "../sections/ProjectSection";
import Section from "../components/Section";

function Index() {
  return (
    <div>
      <Header>
        <div className="container d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="front-header mt-4">Tortoise Programming Community</h1>
          <p className="front-quote m-3">
            "We called him tortoise because he taught us!"
          </p>
          <a
            className="btn btn-outline-primary m-2"
            href="https://discord.gg/WeUtJ7hqum"
          >
            Join now <i className="bi bi-arrow-right-short" />
          </a>
          <div className="spacer m-5" />
        </div>
      </Header>
      <Section no_border={true} bs_classes={"mb--5"}>
        <div className={"row"}>
          <div className="col-lg-10 col-sm-12">
            <h1 className="text-uppercase">Who are we?</h1>
            <br />
            <p className="fs-5">
              {" "}
              Tortoise is a community of programmers and tech enthusiasts.
              <br />
              The server centers around LeetCode, DSA and SDE interview
              preparation or just hanging out and chatting about tech. <br />
              We host daily LeetCode challenges and maintain open-source
              projects that anyone can contribute to.
              <br />
              <br />
            </p>
          </div>
        </div>
      </Section>
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default Index;
