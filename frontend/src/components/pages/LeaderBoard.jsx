import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LeaderBoard({ score }) {
  const [info, setInfo] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getLeader() {
      try {
        const response = await axios.get("http://localhost:3000/top3");
        setInfo(response.data);
        console.log(response.data);
      } catch (e) {
        setError(e.message);
      }
    }
    getLeader();
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-center flex-column p-5">
      <h2 className="mb-3">Top 3 Scores</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {info.length >= 3 ? (
        <table className="table table-bordered w-40 p-3 border ">
          <thead >
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Score</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {info.slice(0, 3).map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.score}</td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
