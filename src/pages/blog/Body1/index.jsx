import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Rasm from "../../../assets/fam.jpg";
import { Button, TextField, Typography } from "@mui/material";
import { textAlign } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	// textAlign: "center",
	boxShadow: "none",
	color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
	return (
		<Box sx={{ flexGrow: 1, mt: "5%", mb: "2%" }}>
			<Grid container spacing={2} columns={12}>
				<Grid item xs={8}>
					<Item>
						<Box
							sx={{
								height: "70vh",
								backgroundImage: `url(${Rasm})`,
							}}
						>
							<Box
								sx={{
									backgroundColor: "white",
									color: "black",
									width: "7%",
									position: "absolute",
									ml: "2%",
									mt: "2%",
									height: "13vh",
								}}
							>
								<Typography
									variant="h4"
									sx={{ fontWeight: "600", mt: "6%", ml: "30%" }}
								>
									22
								</Typography>
								<Typography variant="body1" sx={{ ml: "20%" }}>
									jan 2018
								</Typography>
							</Box>
						</Box>
					</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>
						<TextField label="Search" sx={{ ml: "20%" }}></TextField>
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<Typography variant="h3">Categories</Typography>
						<br />
						<br />
						<br />
						<br />
						<hr />
						<Button sx={{ textAlign: "right" }}>Fashion</Button>
						<br />
						<hr />
						<Button sx={{ textAlign: "left" }}>Beauty</Button>
						<br />
						<hr />
						<Button sx={{ textAlign: "left" }}>Street style</Button>
						<br />
						<hr />
						<Button sx={{ textAlign: "left" }}>Life style</Button>
						<br />
						<hr />
						<Button sx={{ textAlign: "left" }}>DIY & Crafts</Button>
						<br />
						<hr />
					</Item>
				</Grid>
			</Grid>
		</Box>
	);
}
