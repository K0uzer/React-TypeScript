
export interface Task {
    id: number,
    task: string,
    quantity: number,
    ready: boolean,
}

export const tasks: Task[] = [
  {
    id: 1,
    task: 'Купить воды',
    quantity: 2,
    ready: false,
  },
  {
    id: 2,
    task: 'Купить еды',
    quantity: 5,
    ready: true,
  },
]