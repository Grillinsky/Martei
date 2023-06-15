import "../css/Home.css";
import "../css/Dashboard.css";
function Dashboard() {
  //   const ctx = document.getElementById("myChart");

  //   new Chart(ctx, {
  //     type: "line",
  //     data: {
  //       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //       datasets: [
  //         {
  //           label: "# of Votes",
  //           data: [12, 19, 3, 5, 2, 3],
  //           borderWidth: 1,
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //         },
  //       },
  //     },
  //   });

  return (
    <main className="p-0">
      {/* Sidebar */}
      <section className="row bg-light opacity-75 ">
        <div className="col-6">
          {" "}
          <h2 className="p-2">Mod Name</h2>
        </div>
        <div className="col-6">
          {" "}
          <dd className="py-2">Dasboard</dd>
        </div>
      </section>
      <section className="row p-0">
        <nav id="sidebar" class="col-md-2 col-sm-1">
          <ul className="list-group list-group-flush p-3">
            <li className="list-group-item-dark">
              <a href="#">
                <i class="fas fa-chart-line px-2"></i>Dashboard
              </a>
            </li>
            <li className="list-group-item-dark">
              <a href="#">Productos</a>
            </li>
            <li className="list-group-item-dark">
              <a href="#">Pedidos</a>
            </li>
            <li className="list-group-item-dark">
              <a href="#">Ajustes</a>
            </li>
          </ul>
        </nav>
        {/* Content Area */}
        <div id="contentArea" class="col-md-10 col-sm-9">
          {" "}
          <div id="glanceableInfo" className="row">
            <div className="col-md-4 my-2">
              <div className="container">
                <i class="fas fa-wallet"></i>
                <small>Flujo de Capital</small>
                <dd>Uy$ 28.030</dd>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="container">
                <i class="fas fa-clipboard-list"></i>
                <small>Pedidos</small>
                <div>
                  {" "}
                  <span className="text-danger mx-2">20</span>/
                  <span className="text-success mx-2">50</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              {" "}
              <div className="container">
                <i class="far fa-envelope"></i>
                <small>Mensajes</small>
                <div>
                  {" "}
                  <span className="text-danger mx-2">2</span>/
                  <span className="text-success mx-2">25</span>
                </div>
              </div>{" "}
            </div>
          </div>
          <div id="chart" class="container-fluid">
            <h2>Aca va un chart.js ¡Cuando pueda implementarlo! 😠</h2>
            <img src="ImprovedChart1.png" alt="" />
            <canvas id="myChart"></canvas>{" "}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
