import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { TextField, Typography } from "@mui/material";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

import Map from "../../../assets/map.png";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	boxShadow: "none",
	// textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
	return (
		<Box sx={{ flexGrow: 1, mt: "5%", mb: "5%" }}>
			<Grid container spacing={2} columns={16}>
				<Grid item xs={8}>
					<Item sx={{ ml: "15%" }}>
						<br />
						<br />
						<Typography variant="h4">Send Us A Message</Typography>
						<br />
						<br />
						<TextField label="Email Adress" sx={{ width: "70%" }}></TextField>
						<br />
						<br />
						<br />
						<textarea
							placeholder="How Can We Help?"
							style={{
								width: "67%",
								height: "50vh",
								padding: "2%",
								fontSize: "20px",
							}}
						></textarea>
						<br />
						<Button
							sx={{
								width: "60%",
								backgroundColor: "black",
								color: "white",
								p: "2%",
								borderRadius: "20vh",
							}}
						>
							Submit
						</Button>
					</Item>
				</Grid>
				<Grid item xs={8}>
					<Item sx={{ ml: "20%", mt: "8%" }}>
						<Grid>
							<Typography gutterBottom variant="h5">
								<AddLocationIcon /> Adress
							</Typography>
							<Typography variant="body2" sx={{ width: "30%" }}>
								Address Coza Store Center 8th floor, 379 Hudson St, New York, NY
								10018 US
							</Typography>
						</Grid>
						<br />
						<br />
						<br />
						<Grid>
							<Typography gutterBottom variant="h5">
								<CallIcon /> Let's Talk
							</Typography>
							<Typography variant="body2" sx={{ width: "30%" }}>
								+1 800 1236879
							</Typography>
						</Grid>
						<br />
						<br />
						<br />
						<Grid>
							<Typography gutterBottom variant="h5">
								<EmailIcon />
								Sale Support
							</Typography>
							<Button sx={{ width: "50%" }}>
								Sale Support contact@example.com
							</Button>
						</Grid>
					</Item>
				</Grid>
				<Grid item xs={16}>
					<Item>
						<Box
							sx={{
								mt: "5%",
								backgroundImage: `url(${Map})`,
								height: "80vh",
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
							}}
						></Box>
					</Item>
				</Grid>
			</Grid>
		</Box>
	);
}
