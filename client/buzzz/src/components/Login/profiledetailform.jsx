import TextField from "@material-ui/core/TextField";
import style from "./profiledetailform.module.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { Button } from "@material-ui/core";
const ProfileDetailForm = ({ data }) => {
	return (
		<div>
			<form className={style.root} noValidate autoComplete="off">
				<div className={style.inputWrapper}>
					<div className={style.input}>
						<InputLabel htmlFor="grouped-select">Full Name</InputLabel>
						<TextField
							id="outlined-basic"
							variant="outlined"
							defaultValue={data.username}
						/>
					</div>
				</div>
				<div className={style.inputWrapper}>
					<div className={style.input}>
						<InputLabel id="demo-simple-select-label">Designation</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							style={{ minWidth: "240px" }}
						>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</div>
					<div className={style.input}>
						<InputLabel htmlFor="grouped-select">My Website</InputLabel>
						<TextField id="outlined-basic" variant="outlined" />
					</div>
				</div>
				<div className={style.inputWrapper}>
					<div className={style.input}>
						<InputLabel htmlFor="grouped-select">Gender</InputLabel>
						<TextField id="outlined-basic" variant="outlined" />
					</div>
					<div className={style.input}>
						<InputLabel htmlFor="grouped-select">Birthday</InputLabel>
						<TextField
							id="date"
							type="date"
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</div>
				</div>
				<div className={style.inputWrapper}>
					<div className={style.input}>
						<InputLabel htmlFor="grouped-select">City</InputLabel>
						<TextField id="outlined-basic" variant="outlined" />
					</div>
					<div className={style.input}>
						<InputLabel htmlFor="grouped-select">Zip</InputLabel>
						<TextField id="outlined-basic" variant="outlined" />
					</div>
				</div>
				<button className={style.saveButton}>Save</button>
			</form>
		</div>
	);
};

export default ProfileDetailForm;
