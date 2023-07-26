import { useState } from "react";

const Button = ({ text, handleClick }) => (
	<button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
	<tr>
		<td>{text}</td>
		<td> {value}</td>
	</tr>
);

const Statistics = ({ good, neutral, bad }) =>
	good + neutral + bad === 0 ? (
		<p>No feedback given</p>
	) : (
		<div>
			<table>
				<thead>
					<tr>
						<th>feedback</th>
						<th>value</th>
					</tr>
				</thead>
				<tbody>
					<StatisticLine text={"good"} value={good} />
					<StatisticLine text={"neutral"} value={neutral} />
					<StatisticLine text={"bad"} value={bad} />
					<StatisticLine text={"all"} value={bad + good + neutral} />
					<StatisticLine
						text={"average"}
						value={(good - bad) / (good + bad + neutral)}
					/>
					<StatisticLine
						text={"positive"}
						value={(good / (good + bad + neutral)) * 100 + " %"}
					/>
				</tbody>
			</table>
		</div>
	);

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h1>give feedback</h1>
			<Button handleClick={() => setGood(good + 1)} text={"good"} />
			<Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
			<Button handleClick={() => setBad(bad + 1)} text={"bad"} />

			<Statistics bad={bad} good={good} neutral={neutral} />
		</div>
	);
};

export default App;
