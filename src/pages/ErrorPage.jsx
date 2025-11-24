import { useRouteError, Link } from "react-router";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className="container vh-100 bg-dark text-bg-dark d-flex flex-column align-items-center justify-content-center gap-5">
      <h1>Oops!</h1>
      <p>Página no encontrada</p>
      <Link className="btn btn-light" to="/" role="button">Volver a Home</Link>

    </div>
  )

}

export default ErrorPage