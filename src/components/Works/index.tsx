import './index.scss';
import WorksSection from './WorksSection';
import { getWorkList } from '../../utils/api';
import { useEffect, useState } from 'react';

const Index = () => {
  const [workList, setWorkList] = useState<Array<any>>([])
  useEffect(() => {
    async function fetchList() {
      const list = await getWorkList()
      setWorkList(list)
    }
    fetchList()
  }, [])

  return workList?.map(({ title, description, year, bgColor }, index) => (
    <div className="works-container" key={title}>
      <div style={{ width: '40%', textAlign: 'center' }}>
        <h1>Works 0{index + 1}</h1>
      </div>
      <WorksSection key={title} title={title} description={description} year={year} bgColor={bgColor} />
    </div>
  ))
}

export default Index