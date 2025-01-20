import './WorksSection.scss'

type Props = {
  year: string
  title: string
  description: string
}

const WorksSection = ({ year, title, description }: Props) => {
  return (
    <div className="work-section">
      <div className="work-section-year">{year}</div>
      <div className="work-section-company">{title}{description}</div>
    </div>
  )
}

export default WorksSection