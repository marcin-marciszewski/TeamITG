import React from 'react';
import { useState } from 'react';
import useWindowDimensions from '../../components/helpers/GetDimension';
const VehicleCard = ({vehicle,index}) => {
 const [readMore, setReadMore] = useState(false);
  const { width } = useWindowDimensions();
  const delay = index * 100 + "ms" ;
  return (
    <div className="VehicleCard"         
      style={
        {
        animationName: "fadeInDown",
        animationDuration: "1s",
        animationFillMode: 'forwards',
        animationDelay: delay
        }
      }>
      {width < 768 ? <img src= {"../../images/1x1/"+ vehicle.details.id + "_" + vehicle.modelYear+".jpg"} alt={vehicle.details.id && vehicle.details.id} className="VehicleCard__image"/> : <img src= {"../../images/16x9/"+ vehicle.details.id + "_" + vehicle.modelYear+".jpg"} alt={vehicle.details && vehicle.details.id} className="VehicleCard__image"/>} 
      
      <div className="VehicleCard__info">
        <h2 className="VehicleCard__name">{vehicle.details.id && vehicle.details.id}</h2>
        <p className="VehicleCard__price">From {vehicle.details.price && vehicle.details.price}</p>
        <p className="VehicleCard__description">{vehicle.details.description && vehicle.details.description}</p>
        {readMore ?  
          <div className="VehicleCard__readMore">
          <p>Details:</p>
            <ul>
              <li>
                <p>Body type: {vehicle.details.meta.bodystyles && vehicle.details.meta.bodystyles[0]}</p>
              </li>
              <li>
                <p>Drivetrain: {vehicle.details.meta.drivetrain && vehicle.details.meta.drivetrain.map((drivetrain) => <span key={drivetrain}>{drivetrain} </span>)}</p>
              </li>
              <li>
                <p>Emission: {vehicle.details.meta.emissions.template && vehicle.details.meta.emissions.template}</p>
              </li>
            </ul>
          </div> : 
        ''}
      <button onClick={()=>setReadMore(!readMore)}>Read More</button>
      </div>
    </div>
  )
}

export default VehicleCard
