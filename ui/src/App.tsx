import { useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);


function App() {
  const [subject, setSubject] = useState("");
  const [score, setScore] = useState<number | "">("");
  const [graphData, setGraphData] = useState<{ x: string[]; y: number[] }>({
    x: [],
    y: [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (subject && score !== "") {
      try {
        await axios.post("http://localhost:3000/input/create", {
          x: [subject],
          y: [Number(score)],
        });

        const response = await axios.get("http://localhost:3000/input/all");

        const allSubjects: string[] = [];
        const allScores: number[] = [];
        response.data.forEach((entry: { x: string[]; y: number[] }) => {
          allSubjects.push(...entry.x);
          allScores.push(...entry.y);
        });

        setGraphData({ x: allSubjects, y: allScores });
        setSubject("");
        setScore("");
      } catch (error) {
        console.error("Error saving data:", error);
      }
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Enter Subject & Score</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Score"
          value={score}
          onChange={(e) => setScore(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2 text-center">Graph Data</h2>
        <ul>
          <div className="mt-8">
            {/* <h2 className="text-xl font-semibold mb-2">Graph Data</h2> */}
            <Bar
              data={{
                labels: graphData.x,
                datasets: [
                  {
                    label: "Scores",
                    data: graphData.y,
                    backgroundColor: "#fdba74",
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: { display: true },
                },
              }}
            />
          </div>

        </ul>
      </div>
    </div>
  );
}

export default App;
