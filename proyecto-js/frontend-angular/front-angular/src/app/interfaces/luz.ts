export interface Luz {

  id?: number,
  createdAt?: number,
  updatedAt?: number,
  numLuz: string,
  estado?: boolean,
  idHabitacion: {
    id?: number,
    createdAt?: number,
    updatedAt?: number,
    numHabitacion: number,
    estado: string,
    idTipoHabitacion: {
      id?: number,
      createdAt?: number,
      updatedAt?: number,
      nombreTipo: string,
      habitaciones? : any[]
    },
    idPiso: {
      createdAt?: number,
      updatedAt?: number,
      id?: number,
      nombrePiso: string,
      habitaciones? : any[]
    },
    luces? : any[],
    usuariosPorHabitacion? : any[]
  }

}
