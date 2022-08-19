import React from "react";
import { Box, Button, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Rasm from "../../../assets/blog.jpg";
import Rasm1 from "../../../assets/blog1.jpg";

import Fea1 from "../../../assets/fea1.webp";
import Fea2 from "../../../assets/fea2.webp";
import Fea3 from "../../../assets/fea3.webp";

import ButtonBase from "@mui/material/ButtonBase";
const Img = styled("img")({
	margin: "auto",
	display: "block",
	maxWidth: "100%",
	maxHeight: "100%",
});

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	boxShadow: "none",
	// textAlign: "center",
	color: theme.palette.text.secondary,
}));
function Index() {
	return (
		<Box sx={{ mb: "5%" }}>
			<Grid container spacing={2} columns={12}>
				<Grid item xs={8}>
					<Item>
						<Typography
							variant="h4"
							sx={{ fontWeight: "bold", color: "black" }}
						>
							8 Inspiring Ways to Wear Dresses in the Winter
						</Typography>
						<br />
						<Typography variant="h6">
							Class aptent taciti sociosqu ad litora torquent per conubia
							nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec
							dictum vitae sapien eu varius
						</Typography>
						<br />
						<Box sx={{ display: "flex" }}>
							<Typography variant="body1">
								By Admin | StreetStyle, Fashion, Couple | 8 Comments
							</Typography>
							<Button sx={{ ml: "35%", color: "black" }}>
								Continue Reading <ArrowRightAltIcon />
							</Button>
						</Box>
						<br />
						<Box
							sx={{
								height: "70vh",
								backgroundImage: `url(${Rasm})`,
								backgroundPosition: "center",
								backgroundSize: "100%",
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
									18
								</Typography>
								<Typography variant="body1" sx={{ ml: "20%" }}>
									jan 2018
								</Typography>
							</Box>
						</Box>
						<Button sx={{ fontSize: "20px", color: "black" }}>
							The Great Big List of Men’s Gifts for the Holidays
						</Button>
						<br />
						<br />
						<Typography variant="h6">
							Class aptent taciti sociosqu ad litora torquent per conubia
							nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec
							dictum vitae sapien eu varius
						</Typography>
						<br />
						<Box sx={{ display: "flex" }}>
							<Typography variant="body1">
								By Admin | StreetStyle, Fashion, Couple | 8 Comments
							</Typography>
							<Button sx={{ ml: "35%", color: "black" }}>
								Continue Reading <ArrowRightAltIcon />
							</Button>
						</Box>
						<br />
						<br />
						<Box
							sx={{
								height: "70vh",
								backgroundImage: `url(${Rasm1})`,
								backgroundPosition: "center",
								backgroundSize: "100%",
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
									18
								</Typography>
								<Typography variant="body1" sx={{ ml: "20%" }}>
									jan 2018
								</Typography>
							</Box>
						</Box>
						<Button sx={{ fontSize: "20px", color: "black" }}>
							The Great Big List of Men’s Gifts for the Holidays
						</Button>
						<br />
						<br />
						<Typography variant="h6">
							Class aptent taciti sociosqu ad litora torquent per conubia
							nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec
							dictum vitae sapien eu varius
						</Typography>
						<br />
						<Box sx={{ display: "flex" }}>
							<Typography variant="body1">
								By Admin | StreetStyle, Fashion, Couple | 8 Comments
							</Typography>
							<Button sx={{ ml: "35%", color: "black" }}>
								Continue Reading <ArrowRightAltIcon />
							</Button>
						</Box>
						<br />
						<br />
						<Button>1</Button>
						<Button>2</Button>
						<Button>...</Button>
					</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>
						<Typography
							variant="h4"
							sx={{ ml: "2%", fontWeight: "500", color: "black" }}
						>
							Featured Products
						</Typography>
						<Paper
							sx={{
								p: 2,
								margin: "auto",
								maxWidth: 500,
								flexGrow: 1,
								boxShadow: "none",
								backgroundColor: (theme) =>
									theme.palette.mode === "dark" ? "#1A2027" : "#fff",
							}}
						>
							<Grid container spacing={2}>
								<Grid item>
									<ButtonBase sx={{ width: 128, height: 128 }}>
										<Img alt="complex" src={Fea1} />
									</ButtonBase>
								</Grid>
								<Grid item xs={12} sm container>
									<Grid item xs container direction="column" spacing={2}>
										<Grid item xs>
											<br />
											<Typography gutterBottom variant="h6" component="div">
												White Shirt With Pleat Detail Back
											</Typography>
											<Typography variant="body1" gutterBottom>
												$19.00
											</Typography>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Paper>
						<Paper
							sx={{
								p: 2,
								margin: "auto",
								maxWidth: 500,
								flexGrow: 1,
								boxShadow: "none",
								backgroundColor: (theme) =>
									theme.palette.mode === "dark" ? "#1A2027" : "#fff",
							}}
						>
							<Grid container spacing={2}>
								<Grid item>
									<ButtonBase sx={{ width: 128, height: 128 }}>
										<Img alt="complex" src={Fea2} />
									</ButtonBase>
								</Grid>
								<Grid item xs={12} sm container>
									<Grid item xs container direction="column" spacing={2}>
										<Grid item xs>
											<br />
											<Typography gutterBottom variant="h6" component="div">
												White Shirt With Pleat Detail Back
											</Typography>
											<Typography variant="body1" gutterBottom>
												$19.00
											</Typography>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Paper>
						<Paper
							sx={{
								p: 2,
								margin: "auto",
								maxWidth: 500,
								flexGrow: 1,
								boxShadow: "none",
								backgroundColor: (theme) =>
									theme.palette.mode === "dark" ? "#1A2027" : "#fff",
							}}
						>
							<Grid container spacing={2}>
								<Grid item>
									<ButtonBase sx={{ width: 128, height: 128 }}>
										<Img alt="complex" src={Fea3} />
									</ButtonBase>
								</Grid>
								<Grid item xs={12} sm container>
									<Grid item xs container direction="column" spacing={2}>
										<Grid item xs>
											<br />
											<Typography gutterBottom variant="h6" component="div">
												White Shirt With Pleat Detail Back
											</Typography>
											<Typography variant="body1" gutterBottom>
												$19.00
											</Typography>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Paper>
						<Box>
							<Typography
								variant="h4"
								sx={{ color: "black", mt: "10%", fontWeight: "bold" }}
							>
								Archive
							</Typography>
							<br />
							<br />
							<Grid sx={{ width: "100%" }}>
								<Button sx={{ color: "gray" }}>July 2018</Button>
								<Button sx={{ ml: "60%", color: "gray" }}>(9)</Button>
							</Grid>
							<Grid sx={{ width: "100%" }}>
								<Button sx={{ color: "gray" }}>June 2018</Button>
								<Button sx={{ ml: "59.8%", color: "gray" }}>(39)</Button>
							</Grid>
							<Grid sx={{ width: "100%" }}>
								<Button sx={{ color: "gray" }}>May 2018</Button>
								<Button sx={{ ml: "61%", color: "gray" }}>(29)</Button>
							</Grid>
							<Grid sx={{ width: "100%" }}>
								<Button sx={{ color: "gray" }}>April 2018</Button>
								<Button sx={{ ml: "59%", color: "gray" }}>(35)</Button>
							</Grid>
							<Grid sx={{ width: "100%" }}>
								<Button sx={{ color: "gray" }}>March 2018</Button>
								<Button sx={{ ml: "57%", color: "gray" }}>(22)</Button>
							</Grid>
							<Grid sx={{ width: "100%" }}>
								<Button sx={{ color: "gray" }}>February 2018</Button>
								<Button sx={{ ml: "53%", color: "gray" }}>(32)</Button>
							</Grid>
							<Grid sx={{ width: "100%" }}>
								<Button sx={{ color: "gray" }}>January 2018</Button>
								<Button sx={{ ml: "55%", color: "gray" }}>(21)</Button>
							</Grid>
							<Grid sx={{ width: "100%" }}>
								<Button sx={{ color: "gray" }}>December 2018</Button>
								<Button sx={{ ml: "53%", color: "gray" }}>(26)</Button>
							</Grid>
						</Box>
						<br />
						<br />
						<Box>
							<Typography
								variant="h4"
								sx={{ color: "black", fontWeight: "bold" }}
							>
								Tags
							</Typography>

							<br />
							<Button
								sx={{
									ml: "1%",
									border: "1px solid gray",
									borderRadius: "20vh",
									p: "2%",
									width: "25%",
									mb: "1%",
								}}
							>
								Fashion
							</Button>
							<Button
								sx={{
									ml: "1%",
									border: "1px solid gray",
									borderRadius: "20vh",
									p: "2%",
									width: "25%",
									mb: "1%",
								}}
							>
								Lifestyle
							</Button>
							<Button
								sx={{
									ml: "1%",
									border: "1px solid gray",
									borderRadius: "20vh",
									p: "2%",
									width: "25%",
								}}
							>
								Denim
							</Button>
							<Button
								sx={{
									ml: "1%",
									border: "1px solid gray",
									borderRadius: "20vh",
									p: "2%",
									width: "25%",
								}}
							>
								StreetStyle
							</Button>
							<Button
								sx={{
									ml: "1%",
									border: "1px solid gray",
									borderRadius: "20vh",
									p: "2%",
									width: "25%",
								}}
							>
								Crafts
							</Button>
						</Box>
					</Item>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Index;
