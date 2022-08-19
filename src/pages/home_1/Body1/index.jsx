import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

import Rasm1 from "../../../assets/cart1.webp";
import Rasm2 from "../../../assets/cart2.webp";
import Rasm3 from "../../../assets/cart3.webp";

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
		<Box sx={{ flexGrow: 1, mt: "5%" }}>
			<Container maxWidth="xl">
				<Grid container spacing={2} columns={12}>
					<Grid item xs={4}>
						<Item>
							<Typography
								variant="h4"
								sx={{
									mt: "3%",
									ml: "2.8%",
									position: "absolute",
									fontWeight: "500",
									color: "black",
								}}
							>
								Women
							</Typography>
							<Typography
								variant="body1"
								sx={{ mt: "6%", ml: "3%    ", position: "absolute" }}
							>
								Spring 2018
							</Typography>
							<Card sx={{ maxWidth: 405 }}>
								<CardMedia
									component="img"
									alt="green iguana"
									height="300"
									image={Rasm1}
								/>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={4}>
						<Item>
							<Typography
								variant="h4"
								sx={{
									mt: "3%",
									ml: "2.8%",
									position: "absolute",
									fontWeight: "500",
									color: "black",
								}}
							>
								Men
							</Typography>
							<Typography
								variant="body1"
								sx={{ mt: "6%", ml: "3%    ", position: "absolute" }}
							>
								Spring 2018
							</Typography>
							<Card sx={{ maxWidth: 405 }}>
								<CardMedia
									component="img"
									alt="green iguana"
									height="300"
									image={Rasm2}
								/>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={4}>
						<Item>
							<Typography
								variant="h4"
								sx={{
									mt: "3%",
									ml: "2.8%",
									position: "absolute",
									fontWeight: "500",
									color: "black",
								}}
							>
								Accessories
							</Typography>
							<Typography
								variant="body1"
								sx={{ mt: "6%", ml: "3%    ", position: "absolute" }}
							>
								Spring 2018
							</Typography>
							<Card sx={{ maxWidth: 405 }}>
								<CardMedia
									component="img"
									alt="green iguana"
									height="300"
									image={Rasm3}
								/>
							</Card>
						</Item>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
