import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Section from '../../components/common/Section/Section';
import Container from '../../components/common/Container/Container';
import MyLoader from '../../components/common/MyLoader/MyLoader';
import toast from 'react-hot-toast';
import vehicleApi from '../../services/vehiclesApi';
import VehicleFullDetails from '../../components/VehicleFullDetails/VehicleFullDetails';

const VehiclePage = () => {
  const { vehicleId } = useParams();
  const [vehicle, setVehicle] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getVehicle = async () => {
      try {
        setIsLoading(true);
        const vehicle = await vehicleApi.fetchVehicleById(vehicleId);
        console.log(vehicle);
        setVehicle(vehicle);
      } catch (error) {
        console.log(error.message);
        toast.error('Server error try again');
      } finally {
        setIsLoading(false);
      }
    };

    getVehicle();
  }, [vehicleId]);

  return (
    <Section>
      <Container>
        {isLoading && <MyLoader />}
        {!isLoading && vehicle && <VehicleFullDetails vehicle={vehicle} />}
      </Container>
    </Section>
  );
};

export default VehiclePage;
