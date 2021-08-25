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
  photo: string;
  isShowcase: boolean;
}

export { ICreateCarDTO };
