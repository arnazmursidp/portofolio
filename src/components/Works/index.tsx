import "./index.scss";
import WorksSection from "./WorksSection";
import { getWorkList } from "../../utils/api";
import { useEffect, useState } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

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
          <Grid fluid>
            <Row>
              {workList?.map(({ title, description, year, stacks, bgColor }) => (
                <Col lg={4} xs={12} md={6} key={title}>
                  <WorksSection
                    title={title}
                    description={description}
                    stacks={stacks}
                    year={year}
                    bgColor={bgColor}
                  />
                </Col>
              ))}
            </Row>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Index;
