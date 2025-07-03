import "./index.scss";
import WorksSection from "./WorksSection";
import { getWorkList } from "../../utils/api";
import { useEffect, useState } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";

const Index = () => {
  const [workList, setWorkList] = useState<Array<any>>([]);
  useEffect(() => {
    async function fetchList() {
      const list = await getWorkList();
      setWorkList(list);
    }
    fetchList();
  }, []);

  return (
    <div data-scroll-section className="works-container">
      <div className="works-section-container">
        <div style={{ width: "50vw" }}>
          <ResponsiveGridLayout
            className="layout"
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          >
            {workList?.map(({ title, description, year, stacks, bgColor }) => (
              <WorksSection
                key={title}
                title={title}
                description={description}
                stacks={stacks}
                year={year}
                bgColor={bgColor}
              />
            ))}
          </ResponsiveGridLayout>
        </div>
      </div>
    </div>
  );
};

export default Index;
