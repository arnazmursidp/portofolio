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

  return (
    <div data-scroll-section>
      <div className='works-h1-container'>
        <h1 style={{ textAlign: 'center' }}>Recent Works</h1>
      </div>
      <div className='works-container'>
        {workList?.map(({ title, description, year, bgColor }) => (
          <WorksSection key={title} title={title} description={description} year={year} bgColor={bgColor} />
        ))}
      </div>
    </div>
  )
}

export default Index