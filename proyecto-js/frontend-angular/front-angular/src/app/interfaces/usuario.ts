export interface Usuario {

  createdAt?: number,
  updatedAt?: number,
  id?: number,
  nombre: string,
  apellido: string,
  numCedula: string,
  telefono: string,
  correo: string,
  password: string,
  rol?: string,
  usuariosPorHabitacion? : any[],
  rolesPorUsuario? : any[]

}
