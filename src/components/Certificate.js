import Coursera from '../assets/img/coursera.jpg'

const Certificate = ({ title, date }) => {
    return (
        <div className='container-fluid'>
            <div className='flex'>
                <img src={Coursera} style={{ 'height': '100px', 'width': '100px' }} />
                <div className='flex-1'>
                    <h1>{title}</h1>
                    <small>Coursera</small>
                    <br />
                    {/* <p className='certificate-content'>adfasdfafd</p> */}
                    <small>{date}</small>
                </div>
            </div>
        </div>
    )
}

export default Certificate