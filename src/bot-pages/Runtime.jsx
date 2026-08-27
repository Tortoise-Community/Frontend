import React from "react";
import "./styles/Runtime.scss";
import Footer from "../web/components/Footer";

const Runtime = () => {
  return (
    <>
      <div className="runtime-page">
        <div className="runtime-header">
          <div className="mono-directory">Services / Bots / Runtime</div>
          <div className="status status-ok">
            <div className="dot"></div>
            SYSTEM OPERATIONAL
          </div>
        </div>

        <section className="hero">
          <div>
            <h1>
              Compile Code <span>Inside Discord.</span>
            </h1>
            <p>
              An industrial-grade execution environment for Python, JavaScript,
              Java and C++. Powered by Hermes, delivered via Discord.
            </p>
            <div className="buttons">
              <a
                className="btn btn-main"
                href="https://discord.com/oauth2/authorize?client_id=780132667265122315"
              >
                Invite Bot
              </a>
              <a
                className="btn btn-outline"
                href="https://github.com/Tortoise-Community/Runtime-BOT"
              >
                Open Source
              </a>
            </div>
          </div>

          <div>
            <div className="studio-window">
              <div className="window-header">
                <div className="dots">
                  <div className="dot-ui dot-red"></div>
                  <div className="dot-ui dot-yellow"></div>
                  <div className="dot-ui dot-green"></div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#aaa",
                    fontFamily: "JetBrains Mono",
                    fontWeight: 800,
                  }}
                >
                  #discord-channel
                </div>
              </div>
              <div className="window-body">
                <div>
                  <span style={{ color: "#666" }}>01</span> &nbsp;{" "}
                  <span style={{ color: "#c792ea" }}>def</span>{" "}
                  <span style={{ color: "#82aaff" }}>compute</span>():
                </div>
                <div>
                  <span style={{ color: "#666" }}>02</span> &nbsp; &nbsp; &nbsp;{" "}
                  <span style={{ color: "#82aaff" }}>print</span>(
                  <span className="code-string">"Compiling..."</span>)
                </div>
                <div>
                  <span style={{ color: "#666" }}>03</span> &nbsp; &nbsp; &nbsp;{" "}
                  <span style={{ color: "#c792ea" }}>return</span>{" "}
                  <span style={{ color: "#f78c6c" }}>1</span> +{" "}
                  <span style={{ color: "#f78c6c" }}>1</span>
                </div>
                <div className="output-label">
                  {">"} Result: <span style={{ color: "#36454F" }}>2</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="capabilities">
          <div className="section-title">
            <h2>Capabilities</h2>
          </div>
          <div className="grid">
            {[
              {
                title: "Language Support",
                desc: "Native support for Python, JavaScript, Java, C++ with optimized compiler paths.",
              },
              {
                title: "Hermes Engine",
                desc: "Powered by an industrial grade code execution sandbox engine.",
              },
              {
                title: "Telemetry",
                desc: "Real-time health monitoring and system status tracking integrated into every node.",
              },
              {
                title: "Isolation",
                desc: "Strict process isolation ensuring user code runs in a secure, ephemeral containers.",
              },
            ].map((item, i) => (
              <div key={i} className="card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Runtime;
