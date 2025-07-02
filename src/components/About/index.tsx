import "./index.scss";

const About = () => {
  return (
    <div className="about-container" data-scroll-section>
      <div style={{ width: "50vw" }}>
        <p
          className="size-68 medium text-color-1"
          style={{ marginTop: "32px" }}
        >
          Hi! I'm{" "}
          <span className="font-playwrite italic bold primary-2">Arnaz</span> a
          frontend engineer based in Indonesia translating design into reality.
        </p>
        <p className="size-20 text-color-1">
          with 7+ years of experience of developing robust web, from{" "}
          <strong>React to Vue</strong>, from <strong>PWA to SSR</strong>, from{" "}
          <strong>User Facing to Internal Tools</strong> app, from emerging{" "}
          <strong>startup</strong> to <strong>unicorn</strong>, I love to
          balance user experience, aesthetic and functionality into a full
          fledged digital experience, I'd love to collaborate and creating ideas
          then turn it into reality.
        </p>
        <p
          className="size-28 bold italic text-color-1"
          style={{ marginTop: "80px" }}
        >
          Let's <span className="bold primary-2">collaborate!</span>
        </p>
      </div>
    </div>
  );
};

export default About;
