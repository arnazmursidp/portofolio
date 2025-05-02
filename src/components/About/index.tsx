import './index.scss';

const About = () => {
  const mailTo = () => {
    window.location.href = "mailto:arnazmprks@gmail.com";
  }

  return (
    <div className="about-container" data-scroll-section>
      <div style={{ width: '50vw' }}>
        <p className='size-68 medium text-color-1' style={{ marginTop: '32px' }}>
          Hi! I'm <span className='font-playwrite italic bold primary-2'>Arnaz</span> a frontend engineer based in Indonesia translating design into reality.</p>
        <button onClick={mailTo} className='about-button-mailto'>
          <p className='size-28 bold italic text-color-1' style={{ margin: '0px' }}>
            Mail me! <span className='size-32 bold primary-2'>arnazmprks@gmail.com</span>
          </p>
        </button>
        <p className='size-20 text-color-1' style={{ marginTop: '80px' }}>with 7+ years of experience of developing robust web, from React to Vue, from PWA to SSR, from User Facing to Internal Tools app, from emerging startup to unicorn, I love to balance user experience, aesthetic and functionality into a full fledged digital experience, I'd love to collaborate and creating ideas then turn it into reality, let's collaborate!</p>
      </div>
    </div>
  )
}

export default About