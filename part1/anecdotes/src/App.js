import { useState } from "react";

const App = () => {
	const anecdotes = [
		"If it hurts, do it more often.",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
		"The only way to go fast, is to go well.",
	];

	const initialVotes = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 };

	const [selected, setSelected] = useState(0);
	const [votes, setVotes] = useState(initialVotes);

	let max = Object.entries(votes).reduce(
		(max, entry) => (entry[1] >= max[1] ? entry : max),
		[0, -Infinity]
	);

	return (
		<div>
			<h3>Anecdote of the day</h3>
			<p>{anecdotes[selected]}</p>
			<p>has {votes[selected]} votes</p>
			<button
				onClick={() => {
					let votesCopy = { ...votes };
					let votesUpdated = { ...votesCopy, [selected]: votes[selected] + 1 };
					setVotes(votesUpdated);
				}}
			>
				vote
			</button>
			<button
				onClick={() => {
					let num = Math.round(Math.random() * anecdotes.length);
					console.log(num);
					setSelected(num);
				}}
			>
				next anecdotes
			</button>
			<h3>Anecdote with most votes</h3>
			<p>{anecdotes[max[0]]}</p>
			<p>has {max[1]} votes</p>
		</div>
	);
};

export default App;
