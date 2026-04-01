export default function DashboardCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="card">
            <p className="text-gray-400">Focus Level</p>
            <h2 className="text-2xl font-bold text-green-400 mt-2">High</h2>
        </div>

        <div className="card">
            <p className="text-gray-400">Stress</p>
            <h2 className="text-2xl font-bold text-red-400 mt-2">Low</h2>
        </div>

        <div className="card">
            <p className="text-gray-400">Signal Quality</p>
            <h2 className="text-2xl font-bold mt-2">Good</h2>
        </div>

        </div>
    );
    }