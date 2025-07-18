import "./WorksSection.scss";

type Props = {
  company: string;
  title: string;
  description: string;
  stacks: string[];
  bgColor: string;
};

const WorksSection = ({ title, stacks, description, company, bgColor }: Props) => {
  return (
    <div className="work-section" style={{ backgroundColor: bgColor }}>
      <p className="work-section-company">{company}</p>
      <p className="work-section-title">{title}</p>
      <p className="work-section-desc">{description}</p>
      <div className="work-section-stacks">
        {stacks?.map(
          (stack, index) =>
            `${stack}${index !== stacks.length - 1 ? "," : ""} `,
        )}
      </div>
    </div>
  );
};

export default WorksSection;
