import { Box, Typography } from "@mui/material";
import React from "react";
import Rasm from "../../../assets/blog.webp";

function Index() {
	return (
		<Box
			sx={{
				height: "50vh",
				backgroundImage: `url(${Rasm})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<Typography
				variant="h1"
				sx={{ p: "7% 42%", color: "white", fontWeight: "600" }}
			>
				About
			</Typography>
		</Box>
	);
}

export default Index;
