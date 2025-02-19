import Button from '../Reusable/Button'
import './WorksSection.scss'

type Props = {
  year: string
  title: string
  description: string
  stacks: string[]
  bgColor: string
}

const WorksSection = ({ year, title, stacks, bgColor }: Props) => {
  return (
    <div className="work-section">
      <p className='work-section-title' style={{ marginRight: '24px' }}>{title}</p>
      <div className='work-section-description'>
        <p style={{ marginBottom: '24px' }}>{year}</p>
        {stacks?.map((stack) => <p key={stack}>{stack}</p>)}
        <Button style={{ position: 'absolute', bottom: '32px' }}>{title === 'Photography' ? 'See Portfolio' : 'Case Study'}</Button>
      </div>
    </div>
  )
}

export default WorksSection