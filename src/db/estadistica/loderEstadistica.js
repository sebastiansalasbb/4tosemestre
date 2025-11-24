import getEstadistica from "./getEstadistica"

const loderEstadistica = ({ params }) => {
  return getEstadistica(params.nPregunta)
}

export default loderEstadistica