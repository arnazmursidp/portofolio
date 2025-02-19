import './WorksSection.scss'

type Props = {
  year: string
  title: string
  description: string
  bgColor: string
}

const WorksSection = ({ year, title, description, bgColor }: Props) => {
  return (
    <div className="work-section">
      <p className='size-68 italic medium'>{title}</p>
      <div className='work-section-description'>{year}</div>
    </div>
  )
}

export default WorksSection