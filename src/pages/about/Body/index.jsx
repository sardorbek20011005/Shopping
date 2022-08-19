import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import Rasm1 from "../../../assets/about1.jpg";
import Rasm2 from "../../../assets/about2.jpg";

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
			<Grid container spacing={2} columns={12}>
				<Grid item xs={9}>
					<Item>
						<Typography
							variant="h4"
							sx={{ fontWeight: "bold", color: "black" }}
							gutterBottom
						>
							Our Story
						</Typography>
						<Typography
							variant="subtitle1"
							sx={{ width: "85%", mb: "2%" }}
							gutterBottom
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
							consequat consequat enim, non auctor massa ultrices non. Morbi sed
							odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci
							varius natoque penatibus et magnis dis parturient montes, nascetur
							ridiculus mus. Maecenas varius egestas diam, eu sodales metus
							scelerisque congue. Pellentesque habitant morbi tristique senectus
							et netus et malesuada fames ac turpis egestas. Maecenas gravida
							justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus
							ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt
							vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec
							condimentum euismod tortor, eget facilisis diam faucibus et. Morbi
							a tempor elit.
						</Typography>
						<Typography
							variant="subtitle1"
							sx={{ width: "85%", mb: "2%" }}
							gutterBottom
						>
							Donec gravida lorem elit, quis condimentum ex semper sit amet.
							Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut
							fringilla turpis in vehicula vehicula. Pellentesque congue ac orci
							ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu
							facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna
							vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat
							arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit
							convallis ipsum, et maximus enim ligula ac ligula.
						</Typography>
						<Typography variant="subtitle1" sx={{ width: "76%" }} gutterBottom>
							Any questions? Let us know in store at 8th floor, 379 Hudson St,
							New York, NY 10018 or call us on (+1) 96 716 6879
						</Typography>
					</Item>
				</Grid>
				<Grid item xs={3}>
					<Item>
						<Box
							sx={{
								backgroundImage: `url(${Rasm1})`,
								height: "66vh",
								backgroundSize: "cover",
							}}
						></Box>
					</Item>
				</Grid>
				<Grid item xs={3}>
					<Item>
						<Box
							sx={{
								backgroundImage: `url(${Rasm2})`,
								height: "66vh",
								backgroundSize: "cover",
							}}
						></Box>
					</Item>
				</Grid>
				<Grid item xs={9}>
					<Item>
						<Typography
							variant="h4"
							sx={{ fontWeight: "bold", color: "black" }}
							gutterBottom
						>
							Our Mission
						</Typography>
						<Typography
							variant="subtitle1"
							sx={{ width: "85%", mb: "2%" }}
							gutterBottom
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
							consequat consequat enim, non auctor massa ultrices non. Morbi sed
							odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci
							varius natoque penatibus et magnis dis parturient montes, nascetur
							ridiculus mus. Maecenas varius egestas diam, eu sodales metus
							scelerisque congue. Pellentesque habitant morbi tristique senectus
							et netus et malesuada fames ac turpis egestas. Maecenas gravida
							justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus
							ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt
							vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec
							condimentum euismod tortor, eget facilisis diam faucibus et. Morbi
							a tempor elit.
						</Typography>
						<Typography
							variant="subtitle1"
							sx={{ width: "85%", mb: "2%" }}
							gutterBottom
						>
							Donec gravida lorem elit, quis condimentum ex semper sit amet.
							Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut
							fringilla turpis in vehicula vehicula. Pellentesque congue ac orci
							ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu
							facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna
							vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat
							arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit
							convallis ipsum, et maximus enim ligula ac ligula.
						</Typography>
						<Typography variant="subtitle1" sx={{ width: "76%" }} gutterBottom>
							Any questions? Let us know in store at 8th floor, 379 Hudson St,
							New York, NY 10018 or call us on (+1) 96 716 6879
						</Typography>
					</Item>
				</Grid>
			</Grid>
		</Box>
	);
}
