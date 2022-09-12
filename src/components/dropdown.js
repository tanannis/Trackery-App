const Dropdown = ({ handleChangeCategory, selections }) => {
	return (
		<div>
			<select
				name="select"
				onChange={handleChangeCategory}
				className="selection"
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
