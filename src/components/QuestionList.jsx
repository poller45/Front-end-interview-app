import React, { useState, useEffect } from "react";
import QUESTIONS from "./DB";

import Radio from "@mui/material/Radio";

import { Pagination, Typography } from "@mui/material";

const QuestionList = () => {
	const [questions, setQuestions] = useState(QUESTIONS);
	const [currentPage, setCurrentPage] = useState(1);

	const itemsPerPage = 50;
	const pageCount = Math.ceil(questions.length / itemsPerPage);
	const displayedQuestions = questions.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);
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

	const handlePageChange = (event, value) => {
		setCurrentPage(value);
	};

	return (
		<div className="container">
			<Typography variant="h3" component="h3" className="title">
				Front end interview question
			</Typography>
			{displayedQuestions.map((question, index) => (
				<div key={index}>
					<Typography
						variant="h5"
						className={`${getQuestionClassName(question.status)}`}
					>
						{question.question}
					</Typography>
					<div className="radio-container">
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
			<Pagination
				count={pageCount}
				page={currentPage}
				onChange={handlePageChange}
				color="primary"
			/>
		</div>
	);
};

export default QuestionList;
