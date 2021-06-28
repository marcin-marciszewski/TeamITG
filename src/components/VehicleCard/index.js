import React from 'react'

const VehicleCard = ({vehicle}) => {
  return (
    <div className="VehicleCard">
    <img src="img_girl.jpg" alt={`${vehicle.details && vehicle.details.id}`} className="VehicleCard__image"/>

     <h2 className="VehicleCard__name">{vehicle.details && vehicle.details.id}</h2>
     <p className="VehicleCard__price">{vehicle.details && vehicle.details.price}</p>
     <p className="VehicleCard__description">{vehicle.details && vehicle.details.description}</p>

    </div>
  )
}

export default VehicleCard
