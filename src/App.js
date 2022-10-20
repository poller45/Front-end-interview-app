import Questions from "./components/Questions";

function App({ QUESTIONS }) {
	return (
		<div className="App">
			<table className="questions" border="0">
				<caption>Front end interview questions</caption>
				<tr>
					<th>№</th>
					<th>Questions</th>
					<th>Status</th>
				</tr>
				{QUESTIONS.map((item, i) => (
					<Questions
						index={i + 1}
						question={item.question}
						url={item.url}
						status={item.status}
					/>
				))}
			</table>
		</div>
	);
}

export default App;
