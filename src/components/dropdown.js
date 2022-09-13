const Dropdown = ({ selections, getSelection }) => {
	const handleChangeCategory = (e) => {
		e.preventDefault();
		return getSelection(e.target.value);
	};

	return (
		<div className="dropdown">
			<select
				name="select"
				className="selection"
				onChange={handleChangeCategory}
			>
				{selections.map((selection, index) => (
					<option value={selection} key={index}>
						{selection}
					</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
