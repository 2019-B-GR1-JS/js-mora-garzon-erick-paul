export interface Habitacion {

  id?: number,
  createdAt?: number,
  updatedAt?: number,
  numHabitacion: string,
  estado: string,
  tipoHabitacion: string,
  idTipoHabitacion: {
    id?: number,
    createdAt?: number,
    updatedAt?: number,
    nombreTipo: string
  },
  idPiso: {
    createdAt?: number,
    updatedAt?: number,
    id?: number,
    nombrePiso: string
  },
  luces? : any[]//,
  //usuariosPorHabitacion? : any[]

}
