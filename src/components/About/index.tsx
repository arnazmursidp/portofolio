import './index.scss';

const About = () => {
  return (
    <div className="about-container">
      <div style={{ width: '50vw' }}>
        <p className='size-80 medium text-color-1'>I'm <span className='font-playwrite italic bold primary-2'>Arnaz</span> a frontend engineer based in Indonesia translating design into reality.</p>
        <p className='size-28 medium italic text-color-1'>Mail me! <span className='size-32 bold primary-2'>arnazmprks@gmail.com</span></p>
        <p className='size-20 text-color-1' style={{ marginTop: '80px' }}>with 7+ years of experience of developing robust web, from React to Vue, from PWA to SSR, from User Facing to Internal Tools app, from emerging startup to unicorn, I love to balance user experience, aesthetic and functionality into a full fledged digital experience, I'd love to collaborate and creating ideas then turn it into reality, so let's!</p>
      </div>
    </div>
  )
}

export default About