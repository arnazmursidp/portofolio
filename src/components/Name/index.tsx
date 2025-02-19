import Button from './Button';
import './index.scss';

const Name = () => {
    return (
      <div className="name-container" data-scroll-section>
        <h2 className='name-h2'>Seeing Through</h2>
        <div>
          <h1 className='name-h1' style={{ opacity: 0.3 }}>Arnaz's Lens</h1>
          <h1 className='name-h1' style={{ opacity: 0.5 }}>Arnaz's Lens</h1>
          <h1 className='name-h1'>Arnaz's Lens</h1>
          <h1 className='name-h1' style={{ opacity: 0.5 }}>Arnaz's Lens</h1>
          <h1 className='name-h1' style={{ opacity: 0.3 }}>Arnaz's Lens</h1>
        </div>
        <Button />
      </div>
    );
}

export default Name;
