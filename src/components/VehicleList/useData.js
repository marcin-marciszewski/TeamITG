import { useState, useEffect } from 'react';
import getData from '../../api';

export default function useData() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const detailedVehicles = [];
    getData('http://localhost:8080/api/vehicles.json')
      .then((vehiclesList) => Promise.all(vehiclesList.map((vehicle) => fetch(vehicle.apiUrl)
        .then(
          (response) => {
            if (response.status !== 200) {
              console.error(`Looks like there was a problem. Status Code: ${
                response.status}`);
              return;
            }
            return response.json();
          }
        )
        .then((data) => {
          if (data && data.price && data.id === vehicle.id) {
            vehicle.details = data;
          }
          detailedVehicles.push(vehicle);
          return detailedVehicles;
        })
        .then((data) => setVehicles(data)))))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return [
    loading,
    error,
    vehicles,
  ];
}
