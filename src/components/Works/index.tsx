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

  return workList?.map(({ title, description, year }) => (
    <div className="works-container" key={title}>
      <div style={{ width: '40%', textAlign: 'center' }}>
        <h1>Works</h1>
      </div>
      <WorksSection key={title} title={title} description={description} year={year} />
    </div>
  ))
}

export default Index