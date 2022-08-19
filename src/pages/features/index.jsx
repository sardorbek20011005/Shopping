import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import R1 from "../../assets/red1.webp";
import R2 from "../../assets/red2.webp";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		// backgroundColor: theme.palette.common.black,
		color: theme.palette.common.black,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

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
		<Box>
			<Typography sx={{ display: "flex" }}>
				Home
				<ArrowForwardIosIcon
					sx={{ fontSize: "12px", mt: "6px", ml: "1%", mr: "1%" }}
				/>{" "}
				Shopping Cart
			</Typography>
			<br />
			<Box>
				<Grid container spacing={2} columns={12}>
					<Grid item xs={8}>
						<Item>
							<TableContainer component={Paper}>
								<Table sx={{ minWidth: 700 }} aria-label="customized table">
									<TableHead>
										<TableRow>
											<StyledTableCell>PRODUCT</StyledTableCell>
											<StyledTableCell align="right">PRICES</StyledTableCell>
											<StyledTableCell align="right">QUANTITY</StyledTableCell>
											<StyledTableCell align="right">TOTAL</StyledTableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<StyledTableCell align="right" sx={{ width: "40%" }}>
											<Card sx={{ maxWidth: 100 }}>
												<CardMedia
													component="img"
													alt="green iguana"
													height="140"
													image={R1}
												/>
											</Card>
											<Typography
												sx={{ position: "absolute", ml: "7.5%", mt: "-6%" }}
											>
												Fresh Strawberries
											</Typography>
										</StyledTableCell>
										<StyledTableCell>$ 36.00</StyledTableCell>
										<StyledTableCell align="right">
											<Button>-</Button>
											<Button>1</Button>
											<Button>+</Button>
										</StyledTableCell>
										<StyledTableCell align="right">$ 36.00</StyledTableCell>
									</TableBody>
									<TableBody>
										<StyledTableCell align="right" sx={{ width: "40%" }}>
											<Card sx={{ maxWidth: 100 }}>
												<CardMedia
													component="img"
													alt="green iguana"
													height="140"
													image={R2}
												/>
											</Card>
											<Typography
												sx={{ position: "absolute", ml: "7.5%", mt: "-6%" }}
											>
												Fresh Strawberries
											</Typography>
										</StyledTableCell>
										<StyledTableCell>$ 36.00</StyledTableCell>
										<StyledTableCell align="right">
											<Button>-</Button>
											<Button>1</Button>
											<Button>+</Button>
										</StyledTableCell>
										<StyledTableCell align="right">$ 36.00</StyledTableCell>
									</TableBody>
									<TableBody>
										<StyledTableCell>
											<Button
												variant="outlined"
												disabled
												sx={{ ml: "30%", borderRadius: "20vh", p: "3%" }}
											>
												Coupon Code
											</Button>
										</StyledTableCell>
										<StyledTableCell align="right">
											<Button
												sx={{
													backgroundColor: "lightgray",
													color: "black",
													borderRadius: "20vh",
													width: "120%",
													p: "8%",
												}}
											>
												Apply Coupon
											</Button>
										</StyledTableCell>
										<StyledTableCell align="right">
											<Button
												sx={{
													backgroundColor: "lightgray",
													color: "black",
													borderRadius: "20vh",
													width: "70%",
													p: "5%",
												}}
											>
												{" "}
												Update Cart
											</Button>
										</StyledTableCell>
									</TableBody>
								</Table>
							</TableContainer>
						</Item>
					</Grid>
					<Grid item xs={4}>
						<Item>
							<Typography variant="h4">CART TOTALS</Typography>
							<Box sx={{ display: "flex" }}>
								<Typography>Subtotal:</Typography>
								<Typography>$ 79.65</Typography>
							</Box>
							<Box sx={{ display: "flex" }}>
								<Typography>Shipping:</Typography>
								<Typography sx={{ ml: "10%" }}>
									There are no shipping methods available. Please double check
									your address, or contact us if you need any help.
								</Typography>
							</Box>
							<Box sx={{ ml: "25%" }}>
								<Typography>CALCULATE SHIPPING</Typography>
								<br />
								<TextField size="small" label="select a County..."></TextField>
								<br />
								<br />
								<TextField size="small" label="State / County"></TextField>
								<br />
								<br />
								<TextField size="small" label="Postcode / Zip"></TextField>
								<br />
								<br />
								<Button
									sx={{
										backgroundColor: "lightgray",
										color: "black",
										p: "4%",
										borderRadius: "20vh",
									}}
								>
									UPDATE TOTALS
								</Button>
								<br />
								<br />
								<Box sx={{ display: "flex" }}>
									<Typography sx={{ ml: "10%" }}>Subtotal:</Typography>
									<Typography sx={{ ml: "20%" }}>$ 79.65</Typography>
								</Box>
								<br />
								<br />
								<Button
									sx={{
										width: "80%",
										p: "3%",
										backgroundColor: "black",
										color: "white",
										fontSize: "17px",
										borderRadius: "20vh",
									}}
								>
									Proceed the Checkout
								</Button>
							</Box>
						</Item>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}

export default Index;
