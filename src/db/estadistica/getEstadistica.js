import estadisticaDB from "./estadisticaDB"

const getEstadistica = (idQ) => {
  return estadisticaDB.find((e) => e.id == idQ)
}

export default getEstadistica