/**
 * LuzController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const axios = require('axios');

module.exports = {
  accionarLuz: async (req, res)=>{
    const parametros = req.allParams();
    console.log(parametros);
    // Validar que se haya mandado un id
    if(parametros.id){
      const url = 'http://192.168.1.7:1337/sensor/accionar';
      // Buscar componente

      const luz = Luz.findOne({id:parametros.id,}).exec(
        (error,luz)=>{
          if(error){
            return res.serverError({mensaje:'Error en el servidor', error:500});
          }
          if (!luz) return res.badRequest({mensaje:'No existe luz con ese id', error:404});
          // Si existe el componente
          const respuesta = axios.post(
            url,
            {id: luz.id, numLuz:luz.numLuz}
          ).then(
            (respuesta)=>{
              if(respuesta.error){
                return res.serverError({mensaje:'Error en el servidor IOT', error:500, estado: false});
              }else {
                // Actualizar estado componente
                const luzActual = Luz.updateOne(
                  {
                    id:luz.id
                  }
                ).set({estado:!luz.estado}).then(
                  (luzActualizado)=>{
                    return res.ok({mensaje:"Sensor accionado", estado:true, luz:luzActualizado})
                  }
                ).catch(
                  (error)=>{
                    return res.serverError({mensaje:`Error en actualizar el estado ${error}`, error:500});
                  }
                );

              }
            }
          ).catch(
            (error)=>{
              return res.serverError({mensaje:`Error en el servidor IOT:  ${error}`, error:500});
            }
          );
        }
      );

    }else {
      return res.badRequest({
        error:404,
        mensaje:'Mande un id de luz valido'
      })
    }

  },
  apagarLuz: async (req, res)=>{
    const parametros = req.allParams();
    console.log(parametros);
    // Validar que se haya mandado un id
    if(parametros.id){
      const url = 'http://192.168.1.7:1337/sensor/apagar';
      // Buscar componente

      const luz = Luz.findOne({id:parametros.id,}).exec(
        (error,luz)=>{
          if(error){
            return res.serverError({mensaje:'Error en el servidor', error:500});
          }
          if (!luz) return res.badRequest({mensaje:'No existe luz con ese id', error:404});
          // Si existe el componente
          const respuesta = axios.post(
            url,
            {id: luz.id, numLuz:luz.numLuz}
          ).then(
            (respuesta)=>{
              if(respuesta.error){
                return res.serverError({mensaje:'Error en el servidor IOT', error:500, estado: false});
              }else {
                // Actualizar estado componente
                const luzActual = Luz.updateOne(
                  {
                    id:luz.id
                  }
                ).set({estado:!luz.estado}).then(
                  (luzActualizado)=>{
                    return res.ok({mensaje:"Luz apagada", estado:true, luz:luzActualizado})
                  }
                ).catch(
                  (error)=>{
                    return res.serverError({mensaje:`Error en actualizar el estado ${error}`, error:500});
                  }
                );

              }
            }
          ).catch(
            (error)=>{
              return res.serverError({mensaje:`Error en el servidor IOT:  ${error}`, error:500});
            }
          );
        }
      );

    }else {
      return res.badRequest({
        error:404,
        mensaje:'Mande un id de luz valido'
      })
    }

  }

};



