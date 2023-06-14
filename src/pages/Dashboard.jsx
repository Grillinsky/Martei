import "../css/Home.css";

function Dashboard() {
  return (
    <main className="row">
      {/* Sidebar */}
      <nav id="sidebar" class="col-md-2 col-sm-1"></nav>
      {/* Content Area */}
      <div
        id="contentArea"
        class="col-md-8 col-sm-9
      "
      >
        {" "}
        <div class="container">
          <h2>Que onda</h2>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
