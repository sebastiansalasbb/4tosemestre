import { Link } from "react-router"

function DashboardPage() {
  return (
    <>
      <h1 className="fs-1 ">Tests</h1>
      <div className="text-uppercase d-flex flex-column gap-3">
        <Link className="btn btn-info"
          to="/estadistica/1" role="button">Estadística Descriptiva</Link>





      </div>
    </>
  )
}

export default DashboardPage