import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Logo from "./Images/img-1.jpg";

export default function MediaCard() {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia sx={{ height: 140 }} image={Logo} title="green iguana" />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Food bonanza
				</Typography>
				<Typography variant="body2" color="text.secondary">
					It’s the March edition with 7 of your favourite chefs turning up the
					heat! An incredible assortment of food delights from Holy Dave's
					Kitchen, George Grill King, Nairobi Tacos, Akinyi's Plate, Arthurz
					Lafayette, Rabala’s Delights and The Mbuzi Guy await to tantalize your
					taste buds!
				</Typography>
				<Typography variant="body2" color="InfoText">
					Ksh. 200/=
				</Typography>
			</CardContent>
			<CardActions>
				<Button variant="contained" size="large">
					Buy Ticket
				</Button>
			</CardActions>
		</Card>
	);
}
