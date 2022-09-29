import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltersDataService {
  years: number[] = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005,
  2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987, 1986, 1985, 1984,
  1983, 1982, 1981, 1980, 1979, 1978, 1976, 1975, 1970, 1965, 1960, 1955, 1950, 1945, 1940, 1935, 1930 ];
   
  brandsTo7: string[] = ['Adria', 'Citroen', 'Daewoo', 'DAF', 'Dongfeng', 'FAP', 'Fiat', 'Ford', 'GAZ', 'GMC', 'Isuzu', 'Iveco',
  'Magirus Deutz', 'MAN', 'Mazda', 'Mercedes Benz', 'Mitsubishi', 'Nissan', 'Opel', 'Peugeot', 'Piaggio', 'Pinzgauer', 'Renaulit',
  'Scania', 'Steyr', 'TAM', 'Toyota', 'Unimog', 'Volkswagen', 'Volvo', 'Zastava', 'ZIL', 'Others'];

  newOrUsedTrucks: string[] = ['Used and new trucks', 'Only used trucks', 'New trucks only'];

  newOrUsedTrailers: string[] = ['Used and new trailers', 'Only used trailers', 'New trailers only'];

  maxCapacityLoad: string[] = ['2800 kg', '3500 kg', '7500 kg'];

  maxLoadCapacityTrailers: string[]= ['1000 kg', '2800 kg', '3500 kg', '7500 kg', '12000 kg', '20000 kg'];

  fuel: string[] = ['Petrol', 'Diesel', 'Electric', 'Hybrid (petrol/electric)', 'Hybrid (diesel/electric)', 'LPG',
  'Natural Gas', 'Hydrogen', 'Other'];

  emissionClass: string[] = ['Euro 1', 'Euro 2', 'Euro 3', 'Euro 4', 'Euro 5', 'Euro 6'];

  drive: string[] = ['Front', 'Rear', '4x2', '4x4', '6x2', '6x4', '6x6', '8x4', '8x6', '8x8'];

  colors: string[]= ['White', 'Red', 'Black', 'Gray', 'Green', 'Yellow', 'Purple', 'Gold', 'Blue', 'Orange'];

  registeredUntil: string[] = ['Not registered', '09.2022.', '10.2022.', '11.2022.', '12.2022.', '01.2023', '02.2023', '03.2023.',
  '04.2023.', '05.2023.', '06.2023.', '07.2023.', '08.2023.', '09.2023.', '10.2023.']

  trailersBrand: string[] = ['Abi Marauder', 'Ackermann', 'Adria', 'Agados', 'Alhmann', 'AnnaBurger', 'Anssems', 'Auwarter', 
  'Avondale', 'Barthau', 'Barman', 'Bartoleti', 'Bateson', 'Benalu', 'Berger', 'Bergland', 'Bimex prom', 'Biomenrohr', 'Blomert', 
  'Blyss', 'BMF', 'Bodruiskagromash', 'Bockmann', 'Bodex', 'Borco-Hohns', 'Boro', 'Braco', 'Brenderup','Brian James', 'Broshuis', 
  'Bunge', 'Burstner', 'BvL', 'Caravelair', 'Cardi', 'Carnehal', 'Ceylan Treyler', 'Chateau', 'Chereau', 'Creina', 'D-TEC', 
  'Daltec', 'Dellsperger', 'Dethleffs', 'Dinkel'];

  trailersType: string[] = ['Tanks', 'Refrigerators', 'Campers', 'Dump trucks', 'Containers', 'Standard', 'For car transport',
  'For transporting horses', 'For transporting motorcycles', 'For the transport of vessels', 'For transporting work machines',
  'For the transport of working cattle', 'Other'];

  tiresWidth: number[] = [30, 6.5, 6.0, 7.5, 7, 8.00, 8.25, 8.5, 9, 9.5, 10, 12, 13, 155, 165, 175, 185, 195, 205, 215, 220, 225,
  235, 245, 255, 265, 275, 285, 295, 305, 315, 355, 385, 395, 425, 435, 445, 455, 495, 500];

  tiresHeight: number[] = [45, 50, 55, 60, 65, 70, 75, 80, 85, 100, 120];

  regions: string[] = ['West', 'Midwest', 'Northeast', 'Southwest', 'Southeast'];

  adsPosted: string[] = ['In the last 24 hours', 'In the last 3 days', 'In the last 7 days', 'In the last 15 days'];

  cubics: string[] = ['1500 cm3', '2000 cm3', '2500 cm3', '3000 cm3'];

  noOfSeats: string[] = ['2', '2-6', 'More than 6'];

  trucksCategory: string[] = ['Trucks to 7.5 t', 'Trucks over 7.5 t', 'Trailers and semi-trailers'];

  diameters: number[] = [10, 12, 13, 14, 15, 16, 17, 17.5, 19.5, 20, 22.5];

  transmission: string[] = ['Automatic transmission', 'Semi-automatic', 'Manual gearbox'];

  suspensions: string[] = ['Factory', 'Extra reinforced'];

  damaged: string[] = ['It is not damaged', 'Damaged - in driving condition', 'Damaged - not in driving condition'];

  noOfAxlesTrailers: string[] = ['1 axle', '2 axles', '3 axles', 'More than 3'];

  shippingMethod: string[] = ['Personal pickup', 'By express mail', 'No preference'];

  season: string[] = ['Summer', 'Summer', 'All seasons'];

  tireRadius: number[] = [10, 11, 12, 13, 14, 15, 16, 17, 17.5, 19.5, 20, 22.5]
  
  groupParts: string[] = ['Electrical parts and systems', 'Exhaust systems', 'Cabin and cabin parts', 'Cardan shaft and axles',
  'Bodywork', 'Braking system', 'Clutch and transmission', 'Engine and engine parts', 'Pneumatic and hydraulic systems',
  'Accessories and tools', 'Pumps and compressors', 'Cooling systems', 'Safety systems', 'Fuel supply system', 'Suspension',
  'Lights and signaling', 'Oils and liquids', 'Control system', 'Complete machine in parts', 'Other parts and equipment'];
}
