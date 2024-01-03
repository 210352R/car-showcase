import { filterProps } from '@/types';
import axios from 'axios';





export async function fetchCars(filters : filterProps){
    const{make , model} = filters;
    console.log("Fetching cars");
    const options = {
        method: 'GET',
        url: `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&make=${make}`, 
        headers: {
          'X-RapidAPI-Key': '3ebfa8f21cmsh6acdf7d8d6cbb4fp1280c5jsnfeebbcb0d546',
          'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
      };
    try {
        const response = await axios.request(options);
        // console.log(options.params.make , "--------------" , options.params.model)
        //console.log(response.data);
        return response.data;
        
        
    } catch (error) {
        console.error(error);
    }
}


// calculate car rental price

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };