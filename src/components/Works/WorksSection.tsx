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
      <p className='work-section-title'>{title}</p>
      <div className='work-section-stacks'>
        {stacks?.map((stack, index) => `${stack}${index !== stacks.length - 1 ? ',' : ''} `)}
      </div>
    </div>
  )
}

export default WorksSection