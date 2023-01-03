import './HotelInfo.css'
import {TajKrishna as Hotel} from './tajKrishna'



export default function HotelInfo(){
    var photos = ['https://imkarchitects.com/images/projects/business-hotel/taj-krishna/2.jpg','https://cf.bstatic.com/xdata/images/hotel/max1024x768/57479183.jpg?k=c4376e1ef939d4e94ca00aafd0d2f8358b65e3d6425857da991535e0c32572d0&o=&hp=1',
    'https://media-cdn.tripadvisor.com/media/photo-s/08/de/0e/16/taj-krishna-hyd.jpg']
    return(
        <div id="hotelInfo">
            <div id="photoGrid">
        {photos.map((pic)=>(<img src={pic} />))}
            </div>
            <div id='text_hotel_info'>
            <h2>{Hotel.name}@{Hotel.Location}</h2>
                <div id='address_hotel_grid'>
                <h5>{Hotel.Address}</h5><span><a href={Hotel.map_link}>View Map</a></span>
                </div>
                <h5>{Hotel.contact}</h5>
                <div id='features'>
                <ul>
                {Hotel.features.map((feature)=>(<li>{feature}</li>))}
                </ul>
                </div>
                <h4>{Hotel.About}</h4>
                <hr></hr>
                <h3>Property Rules</h3>
                <ul>
                    {Hotel.property_rules.map((rule)=>(<li>{rule}</li>))}
                </ul>
            </div>
        </div>
    )
}