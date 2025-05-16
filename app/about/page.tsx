export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-8 flex flex-col items-center">
      <section className="hero bg-base-200 rounded-2xl p-6">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-4xl font-bold text-primary">
              Über KTM Motorräder
            </h1>
            <p className="py-2 text-secondary">
              KTM ist seit 1953 führend in Offroad- und Straßenmotorrädern.
              Entdecke unsere Leidenschaft für Performance und Innovation.
            </p>
            <button className="btn btn-primary mt-4">Mehr erfahren</button>
          </div>
        </div>
      </section>

      <section>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title text-xl">Unsere Mission</h2>
            <p>
              Wir wollen das Fahrerlebnis neu definieren – mit modernster
              Technik und kompromisslosem Design.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Unsere Werte</h2>
        <div className="stats stats-vertical lg:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-title">Innovation</div>
            <div className="stat-desc">Immer einen Schritt voraus</div>
          </div>
          <div className="stat">
            <div className="stat-title">Leidenschaft</div>
            <div className="stat-desc">Adrenalin und Abenteuer</div>
          </div>
          <div className="stat">
            <div className="stat-title">Teamgeist</div>
            <div className="stat-desc">Gemeinsam stark</div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Unser Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "Max Müller", role: "CEO" },
            { name: "Anna Schmidt", role: "Lead Designerin" },
            { name: "Lukas Weber", role: "Technischer Leiter" },
            { name: "Sophie Bauer", role: "Marketing-Managerin" },
          ].map((member) => (
            <div key={member.name} className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title">{member.name}</h3>
                <p className="text-secondary">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
