import React, { useState, useEffect } from "react";
import QUESTIONS from "./DB";

import Radio from "@mui/material/Radio";
import { Typography } from "@mui/material";

const QuestionList = () => {
	const [questions, setQuestions] = useState(QUESTIONS);

	useEffect(() => {
		const savedQuestions = JSON.parse(localStorage.getItem("questions"));
		if (savedQuestions) {
			setQuestions(savedQuestions);
		}
	}, []);

	const handleOptionChange = (questionIndex, status) => {
		const updatedQuestions = [...questions];
		updatedQuestions[questionIndex].status = status;
		setQuestions(updatedQuestions);
		localStorage.setItem("questions", JSON.stringify(updatedQuestions));
	};

	const getQuestionClassName = (status) => {
		switch (status) {
			case 1:
				return "in-progress";
			case 2:
				return "not-clear";
			case 3:
				return "resolved";
			default:
				return "not-started";
		}
	};
	return (
		<div>
			<Typography variant="h1" component="h2">
				Front end interview question
			</Typography>
			{questions.map((question, index) => (
				<div className={`${getQuestionClassName(question.status)}`} key={index}>
					<Typography
						variant="h5"
						className={`${getQuestionClassName(question.status)}`}
					>
						{index + 1}.{question.question}
					</Typography>
					<div>
						<Radio
							type="radio"
							value="0"
							checked={question.status === 0}
							onChange={() => handleOptionChange(index, 0)}
							color="default"
						/>
						not starded learn
						<Radio
							type="radio"
							value="1"
							checked={question.status === 1}
							onChange={() => handleOptionChange(index, 1)}
						/>
						in-progress
						<Radio
							type="radio"
							value="2"
							checked={question.status === 2}
							onChange={() => handleOptionChange(index, 2)}
							color="secondary"
						/>
						not-clear
						<Radio
							type="radio"
							value="3"
							checked={question.status === 3}
							onChange={() => handleOptionChange(index, 3)}
							color="success"
						/>
						learned
					</div>
					{question.status === 2 && question.url && (
						<a href={question.url} target="_blank" rel="noreferrer">
							Learn more
						</a>
					)}
				</div>
			))}
		</div>
	);
};

export default QuestionList;
