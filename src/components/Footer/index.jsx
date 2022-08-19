import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, TextField, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TelegramIcon from "@mui/icons-material/Telegram";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: "transparent",
	...theme.typography.body2,
	padding: theme.spacing(1),
	// textAlign: "center",
	boxShadow: "none",
	color: "white",
}));

export default function ColumnsGrid() {
	return (
		<Box
			sx={{ flexGrow: 1, height: "50vh", backgroundColor: "#272727", pt: "7%" }}
		>
			<Grid container spacing={2} columns={12}>
				<Grid item xs={3}>
					<Item>
						<Typography variant="h5" gutterBottom>
							Vacation Rental
						</Typography>
						<br />
						<Typography gutterBottom>
							A small river named Duden flows by their place and supplies it
							with the necessary regelialia.
						</Typography>
						<br />
						<Button>
							Read More <KeyboardArrowRightIcon />
						</Button>
					</Item>
				</Grid>
				<Grid item xs={3}>
					<Item>
						<Typography sx={{ ml: "1.3%" }} variant="h5">
							Services
						</Typography>
						<br />
						<Button sx={{ color: "white" }}>Map Direction</Button>
						<br />
						<Button sx={{ color: "white" }}>Accomodation Services</Button>
						<br />
						<Button sx={{ color: "white" }}>Great Experience</Button>
						<br />
						<Button sx={{ color: "white" }}>Perfect Central Location</Button>
					</Item>
				</Grid>
				<Grid item xs={3}>
					<Item>
						<Typography variant="h5" sx={{ ml: "1.3%" }}>
							Tag Cloud
						</Typography>
						<br />
						<Box width={"95%"}>
							<Button
								sx={{
									border: "1px solid gray",
									color: "white",
								}}
							>
								Apartmen
							</Button>
							<Button
								sx={{
									border: "1px solid gray",
									ml: "2%",
									color: "white",
								}}
							>
								Home
							</Button>
							<Button
								sx={{
									border: "1px solid gray",
									ml: "2%",
									color: "white",
								}}
							>
								vacation
							</Button>
							<Button
								sx={{
									border: "1px solid gray",
									ml: "2%",
									mt: "2%",
									color: "white",
								}}
							>
								Rental
							</Button>
							<Button
								sx={{
									border: "1px solid gray",
									ml: "2%",
									mt: "2%",
									color: "white",
								}}
							>
								Rent
							</Button>
							<Button
								sx={{
									border: "1px solid gray",
									ml: "2%",
									mt: "2%",
									color: "white",
								}}
							>
								House
							</Button>
							<Button
								sx={{
									border: "1px solid gray",
									ml: "2%",
									mt: "2%",
									color: "white",
								}}
							>
								Place
							</Button>
							<Button
								sx={{
									border: "1px solid gray",
									ml: "2%",
									mt: "2%",
									color: "white",
								}}
							>
								Drinks
							</Button>
						</Box>
					</Item>
				</Grid>
				<Grid item xs={3}>
					<Item>
						<Typography variant="h5">Subcribe</Typography>
						<br />
						<TextField
							label="Enter Email Adress"
							sx={{
								backgroundColor: "rgb(255 255 255 / 5%)",
							}}
						></TextField>
						<Button
							sx={{
								backgroundColor: "#fd7792",
								height: "55px",
								color: "white",
							}}
						>
							<TelegramIcon />
						</Button>
					</Item>
					<Item>
						<Typography variant="h5">Follow Us</Typography>
						<br />
						<Button
							sx={{
								border: "1px solid grey",
								color: "white",
							}}
						>
							<InstagramIcon />
						</Button>
						<Button
							sx={{
								border: "1px solid grey",
								ml: "2%",
								color: "white",
							}}
						>
							<FacebookIcon />
						</Button>
						<Button
							sx={{
								border: "1px solid grey",
								ml: "2%",
								color: "white",
							}}
						>
							<TwitterIcon />
						</Button>
					</Item>
				</Grid>
			</Grid>
		</Box>
	);
}
