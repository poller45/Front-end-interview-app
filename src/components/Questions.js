import React, { useState } from "react";
import "./Questions.css";

function Questions({ index, question, url, status }) {
	const [selectedRadioBtn, setSelectedRadioBtn] = useState("radio0");
	const [className, setClassName] = useState("");
	const [urlClassName, setUrlClassName] = useState("hide");

	const IsRadioSelected = (value) => selectedRadioBtn === value;

	const handleRadioClick = (e) => {
		setSelectedRadioBtn(e.currentTarget.value);

		if (e.target.id === "got-through") {
			setClassName("got-through");
			setUrlClassName("hide");
		} else if (e.target.id === "need-help") {
			setClassName("need-help");
			setUrlClassName("show");
		} else if (e.target.id === "not-understood") {
			setClassName("not-understood");
		} else if (e.target.id === "not-started") {
			setClassName("not-started");
			setUrlClassName("hide");
		}
	};

	return (
		<tr>
			<td>{index}</td>
			<td className={className}>
				{question} <br />
				<span className={urlClassName}>
					<a href={url}>{url}</a>
				</span>
			</td>
			<td>
				<label class="cheked">
					<input
						type="checkbox"
						id="not-started"
						value="radio0"
						onClick={handleRadioClick}
						checked={IsRadioSelected("radio0")}
					/>
					<s></s>
					<span>not starded learn</span>
				</label>
				<br></br>
				<label>
					<input
						type="checkbox"
						id="got-through"
						value="radio1"
						onChange={handleRadioClick}
						checked={IsRadioSelected("radio1")}
					/>
					<s></s>
					<span>learned</span>
				</label>
				<br></br>
				<label>
					<input
						type="radio"
						id="need-help"
						value="radio2"
						onChange={handleRadioClick}
						checked={IsRadioSelected("radio2")}
					/>
					<s></s>
					<span>I need help with it</span>
				</label>
				<br></br>
				<label>
					<input
						type="radio"
						id="not-understood"
						value="radio3"
						onChange={handleRadioClick}
						checked={IsRadioSelected("radio3")}
					/>
					<s></s>
					<span>not understood</span>
				</label>
			</td>
		</tr>
	);
}

export default Questions;
