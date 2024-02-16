
export interface Task {
  description: string,
  quantity: number,
  packages: boolean,
  id: number,
}

export const tasks: Task[] = [
  {
    description: 'Купить воды',
    quantity: 5,
    packages: true,
    id: 123421,
  },
  {
    description: 'Купить еды',
    quantity: 5,
    packages: false,
    id: 125435346,
  },
]