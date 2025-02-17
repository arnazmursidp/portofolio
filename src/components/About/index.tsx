import './index.scss';

const About = () => {
  return (
    <div className="about-container">
      <div style={{ width: '50vw' }}>
        <p className='size-80 medium text-color-1'>I'm <span className='font-playwrite italic bold primary-2'>Arnaz</span> a frontend engineer based in Indonesia translating design into reality.</p>
        <p className='size-28 medium italic text-color-1'>Mail me! <span className='size-32 bold primary-2'>arnazmprks@gmail.com</span></p>
        <p className='size-20 text-color-1' style={{ marginTop: '80px' }}>with 7+ years of experience </p>
      </div>
    </div>
  )
}

export default About