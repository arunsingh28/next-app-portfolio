import Push from '../assets/img/pushideas.jpg'
const Experience = ({ jobTitle, company, time, point }) => {
  return (
    <div className='container-fluid'>
      <div className='flex'>
        <img src={Push} style={{ 'height': '100px', 'width': '100px' }} />
        <div className='flex-1'>
          <h1>{jobTitle}</h1>
          <small>{company}</small>
          <br />
          {
            point && point.map((i, index) => {
              return (
                <ul style={{ 'margin': '20px 0' }}>
                  <li key={index}>{i.point}</li>
                </ul>
              )
            })
          }
          <small>{time}</small>
        </div>
      </div>
    </div>
  )
}

export default Experience