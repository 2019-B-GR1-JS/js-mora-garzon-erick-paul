import {Luz} from "./luz";

export interface Respuesta {
  "mensaje": string,
  "estado": boolean,
  "luz"?: Luz
}
