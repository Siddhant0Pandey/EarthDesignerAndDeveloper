import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MissionAndGoals = () => {
  return (
    <div style={{ paddingTop: "100px", maxWidth: "95%", margin: "auto" }}>
      <h1
        style={{
          marginBottom: "20px",
          textAlign: "center",
          color: "#005792",
          fontWeight: "bold",
        }}
      >
        Mission and Goals
      </h1>

      {/* Mission Section */}
      <div className="row" style={{ marginBottom: "30px" }}>
        {/* Mission */}
        <div className="col-md-6" style={{ paddingRight: "15px" }}>
          <h2
            style={{
              marginBottom: "15px",
              textTransform: "none",
              letterSpacing: "normal",
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "#F57C00",
            }}
          >
            Mission
          </h2>
          <p
            style={{
              margin: 0,
              lineHeight: "1.6",
              fontFamily: "inherit",
            }}
          >
            He as spoke avoid given downs money on we. Of properly carriage
            shutters ye as wandered up repeated moreover. Article evident
            arrived express highest men did boy. Mistress sensible entirely am
            so. Quick can manor smart money hopes worth too. Comfort produce
            husband boy her had hearing. Law others theirs passed but wishes.
            You day real less till dear read. Considered use dispatched
            melancholy sympathize discretion led.
          </p>
        </div>
      </div>

      <div className="row">
        {/* Goals */}
        <div className="col-md-6 offset-md-6" style={{ paddingLeft: "15px" }}>
          <h2
            style={{
              marginBottom: "15px",
              textTransform: "none",
              letterSpacing: "normal",
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "#F57C00",
            }}
          >
            Goals
          </h2>
          <p
            style={{
              margin: 0,
              lineHeight: "1.6",
              fontFamily: "inherit",
            }}
          >
            Article evident arrived express highest men did boy. Mistress
            sensible entirely am so. Quick can manor smart money hopes worth
            too. Comfort produce husband boy her had hearing. Law others theirs
            passed but wishes. You day real less till dear read. Considered use
            dispatched melancholy sympathize discretion led. Oh feel if up to
            till like.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionAndGoals;
