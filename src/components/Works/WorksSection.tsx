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
      <div className="work-section-year" style={{ backgroundColor: bgColor }}>{year}</div>
    </div>
  )
}

export default WorksSection