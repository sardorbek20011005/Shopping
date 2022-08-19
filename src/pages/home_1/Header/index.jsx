import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import R1 from "../../../assets/karusel1.webp";
import R2 from "../../../assets/karusel2.webp";
import R3 from "../../../assets/karusel3.webp";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
	{
		label: "San Francisco – Oakland Bay Bridge, United States",
		imgPath: R1,
		title: (
			<Typography
				variant="h3"
				sx={{
					width: { xs: "80%" },
					fontSize: { lg: "35px", md: "30px", sm: "30px", xs: "30px" },
					position: "absolute",
					left: { lg: "-25%" },
					top: { lg: "42%" },
					color: "black",
				}}
			>
				Men New-Season
			</Typography>
		),
		title1: (
			<Typography
				variant="h4"
				sx={{
					fontSize: { lg: "70px", md: "80px", sm: "40px", xs: "35px" },
					position: "absolute",
					left: { lg: "4%" },
					top: "50%",
					fontFamily: "inherit",
					color: "black",
					fontWeight: "bold",
				}}
			>
				JACKETS & COATS
			</Typography>
		),
		button: (
			<Button
				variant="contained"
				sx={{
					fontSize: { lg: "15px", md: "20px" },
					position: "absolute",
					background: "none",
					left: "5%",
					top: "70%",
					p: "0.7%",
					pl: "3%",
					pr: "3%",
					bgcolor: "blue",
					opacity: 0.5,
					borderRadius: "20vh",
				}}
			>
				Shop Now
			</Button>
		),
	},
	{
		label: "Bird",
		imgPath: R2,
		title: (
			<Typography
				variant="h3"
				sx={{
					position: "absolute",
					top: { lg: "40%", md: "30%", sm: "30%", xs: "30%" },
					fontSize: { lg: "30px", md: "60px", sm: "30px", xs: "30px" },
					left: { lg: "62.7%", md: "130%", sm: "140%" },
					width: "100%",
					color: "black",
				}}
			>
				Men Collection 2018
			</Typography>
		),
		title1: (
			<Typography
				variant="h4"
				sx={{
					fontSize: { lg: "70px", md: "90px", sm: "50px", xs: "40px" },
					position: "absolute",
					left: { lg: "72%", md: "125%", sm: "134%" },
					top: { lg: "50%", md: "40%", sm: "40%", xs: "40%" },
					color: "black",
					fontWeight: "bold",
					width: "100%",
				}}
			>
				NEW ARRIVALS
			</Typography>
		),

		button: (
			<Button
				variant="contained"
				sx={{
					width: "12%",
					fontSize: { lg: "15px", md: "20px" },
					position: "absolute",
					background: "none",
					left: { lg: "103%", md: "140%", sm: "145%" },
					borderRadius: "20vh",
					top: { lg: "70%", md: "80%", sm: "70%", xs: "80%" },
					bgcolor: "black",
					opacity: 0.5,
					p: "1%",
					bgcolor: "blue",
				}}
			>
				Shop Now
			</Button>
		),
	},
	{
		label: "Bird",
		imgPath: R3,
		title: (
			<Typography
				variant="h3"
				sx={{
					position: "absolute",
					top: { lg: "35%", md: "30%", sm: "30%", xs: "30%" },
					fontSize: { lg: "30px", md: "60px", sm: "30px", xs: "30px" },
					left: { lg: "165%", md: "130%", sm: "140%" },
					width: "100%",
					color: "black",
				}}
			>
				Women Collection 2018
			</Typography>
		),
		title1: (
			<Typography
				variant="h4"
				sx={{
					fontSize: { lg: "60px", md: "90px", sm: "50px", xs: "40px" },
					position: "absolute",
					left: { lg: "168.2%", md: "125%", sm: "134%" },
					top: { lg: "45%", md: "40%", sm: "40%", xs: "40%" },
					color: "black",
					fontWeight: "bold",
					width: "100%",
				}}
			>
				NEW SEASON
			</Typography>
		),

		button: (
			<Button
				variant="contained"
				sx={{
					fontSize: { lg: "15px", md: "20px" },
					position: "absolute",
					p: "1%",
					bgcolor: "blue",
					width: "12%",
					borderRadius: "20vh",
					left: { lg: "204%", md: "140%", sm: "145%" },
					top: { lg: "65%", md: "80%", sm: "70%", xs: "80%" },
					opacity: 0.5,
				}}
			>
				Shop Now
			</Button>
		),
	},
];

function SwipeableTextMobileStepper() {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = images.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step) => {
		setActiveStep(step);
	};
	return (
		<Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
			<AutoPlaySwipeableViews
				axis={theme.direction === "rtl" ? "x-reverse" : "x"}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
			>
				{images.map((step, index) => (
					<Box key={step.label}>
						{Math.abs(activeStep - index) <= 2 ? (
							<Box>
								<Box
									component="img"
									sx={{
										height: { lg: 600 },
										display: "block",
										maxWidth: "100%",
										overflow: "hidden",
										width: "100%",
									}}
									src={step.imgPath}
									alt={step.label}
								/>
								<Box
									sx={{
										width: "100%",
										height: "100%",
										textAlign: "center",
										margin: "auto",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									{step.title}
									{step.title1}
									{step.title2}
									{step.button}
								</Box>
							</Box>
						) : null}
					</Box>
				))}
			</AutoPlaySwipeableViews>
		</Box>
	);
}

export default SwipeableTextMobileStepper;
