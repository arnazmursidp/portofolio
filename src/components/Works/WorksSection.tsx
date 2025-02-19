import './WorksSection.scss'

type Props = {
  year: string
  title: string
  description: string
  bgColor: string
}

const WorksSection = ({ year, title, description, bgColor }: Props) => {
  return (
    <div className="work-section">{year}</div>
  )
}

export default WorksSection