import { Link } from "react-router";
import ConfettiCanvas from "../components/ConfettiCanvas";


function FinalPage() {


  return (
    <div className="container vh-100 bg-dark text-bg-dark d-flex flex-column align-items-center justify-content-center gap-5">
      <h1>Test Completo</h1>
      <p>Felicitaciones</p>
      <Link className="btn btn-light position-relative z-2" to="/" role="button">Volver a Home</Link>
      <ConfettiCanvas />

    </div>
  )

}

export default FinalPage