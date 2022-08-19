import { Button, Typography, Box, Container } from "@mui/material";
import React from "react";

import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import R1 from "../../assets/big1.webp";
import R2 from "../../assets/big2.webp";
import R3 from "../../assets/big3.webp";
import R4 from "../../assets/big4.webp";
import R5 from "../../assets/big5.webp";
import R6 from "../../assets/big6.jpg";
import R7 from "../../assets/big7.webp";
import R8 from "../../assets/big8.jpg";
import R9 from "../../assets/big9.webp";
import R10 from "../../assets/big10.webp";
import R11 from "../../assets/big11.webp";
import R12 from "../../assets/big12.webp";
import R13 from "../../assets/big13.webp";
import R14 from "../../assets/big14.jpg";
import R15 from "../../assets/big15.webp";
import R16 from "../../assets/big16.webp";

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
		<Container maxWidth="xl">
			<Box sx={{ mt: "5%" }}>
				<Typography variant="h4">PRODUCT OVERVIEW</Typography>
				<br />
				<Box sx={{ mb: "2%" }}>
					<Button>
						<u>All Products</u>
					</Button>
					<Button sx={{ ml: "1%" }}>Women</Button>
					<Button sx={{ ml: "1%" }}>Men</Button>
					<Button sx={{ ml: "1%" }}>Bag</Button>
					<Button sx={{ ml: "1%" }}>Shoes</Button>
					<Button sx={{ ml: "1%" }}>Watches</Button>
					<Button
						sx={{
							ml: "45%",
						}}
						variant="outlined"
						startIcon={<FilterListIcon />}
					>
						Send
					</Button>
					<Button
						sx={{
							ml: "1%",
						}}
						variant="outlined"
						startIcon={<SearchIcon />}
					>
						Send
					</Button>
				</Box>
				<Grid container spacing={2} columns={12}>
					<Grid item xs={3}>
						<Item>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="400"
									image={R1}
									alt="green iguana"
								/>
								<Typography variant="body1">Esprit Ruffle Shirt</Typography>
								<Typography variant="body2">$16.64</Typography>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="400"
									image={R2}
									alt="green iguana"
								/>
								<Typography variant="body1">Esprit Ruffle Shirt</Typography>
								<Typography variant="body2">$16.64</Typography>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="400"
									image={R3}
									alt="green iguana"
								/>
								<Typography variant="body1">Esprit Ruffle Shirt</Typography>
								<Typography variant="body2">$16.64</Typography>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="400"
									image={R4}
									alt="green iguana"
								/>
								<Typography variant="body1">Esprit Ruffle Shirt</Typography>
								<Typography variant="body2">$16.64</Typography>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="400"
									image={R5}
									alt="green iguana"
								/>
								<Typography variant="body1">Esprit Ruffle Shirt</Typography>
								<Typography variant="body2">$16.64</Typography>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="400"
									image={R6}
									alt="green iguana"
								/>
								<Typography variant="body1">Esprit Ruffle Shirt</Typography>
								<Typography variant="body2">$16.64</Typography>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="400"
									image={R7}
									alt="green iguana"
								/>
								<Typography variant="body1">Esprit Ruffle Shirt</Typography>
								<Typography variant="body2">$16.64</Typography>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="400"
									image={R8}
									alt="green iguana"
								/>
								<Typography variant="body1">Esprit Ruffle Shirt</Typography>
								<Typography variant="body2">$16.64</Typography>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="400"
									image={R9}
									alt="green iguana"
								/>
								<Typography variant="body1">Esprit Ruffle Shirt</Typography>
								<Typography variant="body2">$16.64</Typography>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="400"
									image={R10}
									alt="green iguana"
								/>
								<Typography variant="body1">Esprit Ruffle Shirt</Typography>
								<Typography variant="body2">$16.64</Typography>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="400"
									image={R11}
									alt="green iguana"
								/>
								<Typography variant="body1">Esprit Ruffle Shirt</Typography>
								<Typography variant="body2">$16.64</Typography>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="400"
									image={R12}
									alt="green iguana"
								/>
								<Typography variant="body1">Esprit Ruffle Shirt</Typography>
								<Typography variant="body2">$16.64</Typography>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="400"
									image={R13}
									alt="green iguana"
								/>
								<Typography variant="body1">Esprit Ruffle Shirt</Typography>
								<Typography variant="body2">$16.64</Typography>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="400"
									image={R14}
									alt="green iguana"
								/>
								<Typography variant="body1">Esprit Ruffle Shirt</Typography>
								<Typography variant="body2">$16.64</Typography>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="400"
									image={R15}
									alt="green iguana"
								/>
								<Typography variant="body1">Esprit Ruffle Shirt</Typography>
								<Typography variant="body2">$16.64</Typography>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={3}>
						<Item>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="400"
									image={R16}
									alt="green iguana"
								/>
								<Typography variant="body1">Esprit Ruffle Shirt</Typography>
								<Typography variant="body2">$16.64</Typography>
							</Card>
						</Item>
					</Grid>
				</Grid>
				<Button
					sx={{
						p: "1%",
						width: "13%",
						mt: "3%",
						borderRadius: "20vh",
						color: "black",
						mb: "2%",
						ml: "45%",
						backgroundColor: "lightgray",
					}}
				>
					LOAD MORE
				</Button>
			</Box>
		</Container>
	);
}

export default Index;
