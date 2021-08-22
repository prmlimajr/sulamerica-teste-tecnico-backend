interface ICreateCarDTO {
  name: string;
  brand: string;
  color: string;
  dailyRate: number;
  manufactureYear: number;
  model: number;
  category: string;
  mileage: string;
  unavailableDates?: string[];
}

export { ICreateCarDTO };
