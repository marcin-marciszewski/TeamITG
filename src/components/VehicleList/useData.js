import { useState, useEffect } from 'react';
import getData from '../../api';

export default function useData() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const detailedVehicles = [];
    getData('http://localhost:8080/api/vehicles.json')
    .then((vehicles) => Promise.all(vehicles.map(vehicle =>
        fetch(vehicle.apiUrl)
        .then(
          function(response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                response.status);
              return;
            }
            return response.json()
          }
        )
        .then(function(data) {
          if(data && data.price && data.id === vehicle.id) {
            vehicle.details = data;
          }
          detailedVehicles.push(vehicle);
          return detailedVehicles;
        })
        .then(data => setVehicles(data))
      )))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return [
    loading,
    error,
    vehicles,
  ];
}
