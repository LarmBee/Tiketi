import React,{useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Logo from "../Images/Pool Party Flyer.png";
import Popover from "@mui/material/Popover";
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase'

export default function ImgMediaCard() {

	const [anchorEl, setAnchorEl] = useState(null);
	const [newName, setNewName] =useState("")
	const [newEmail, setNewEmail] =useState("")
	const [newNumber, setNewNumber] =useState("")



	const usersCollectionRef =collection(db,"users")

	const createUser=async()=>{
		await addDoc(usersCollectionRef,{name:newName, email:newEmail, number:newNumber})
	}	

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;


	
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia component="img" alt="green iguana" height="260" image={Logo} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Pool Party
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Lizards are a widespread group of squamate reptiles, with over 6,000
					species, ranging across all continents except Antarctica
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="large" variant="contained" onClick={handleClick}>
					Book Ticket
				</Button>
				<Popover
					id={id}
					open={open}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
				>
					<Typography sx={{ p: 2 }}>INSTRUCTIONS :</Typography>
					<Typography sx={{ p: 2 }}>
						STEP 1 :Go to M-PESA and select "Lipa na Mpesa" on your phone
					</Typography>
					<Typography sx={{ p: 2 }}>STEP 2 :Select "Pay Bill"</Typography>
					<Typography sx={{ p: 2 }}>
						STEP 3 :Enter Business Number as 522522
					</Typography>
					<Typography sx={{ p: 2 }}>
						STEP 4 :Input Account Number as 1285711092
					</Typography>
					<Typography sx={{ p: 2 }}>STEP 5 :Input amount as 300</Typography>
					<Typography sx={{ p: 2 }}>
						STEP 6 :Input your M-PESA pin and confirm
					</Typography>
					<Typography sx={{ p: 2 }}>
						STEP 7 :Fill in the form below with all your correct details <br />
					</Typography>
					<Typography sx={{p:2}}>
						**Please note these details will be used to send you tickets any
						mistake made will be at your own inconvenience**
						<br />
						**Phone Number should be the same one used to pay via Mpesa**
					</Typography>
					<TextField id="outlined-basic" placeholder="Full Name" label="FullName" variant="outlined" onChange={(e)=>setNewName(e.target.value)} />
					<TextField
						id="outlined-basic"
						label="EmailAddress"
						variant="outlined"
						placeholder="Email for tickets"
						onChange={(e)=>setNewEmail(e.target.value)}
					/>
					<TextField
						id="outlined-basic"
						label="PhoneNumber"
						variant="outlined"
						placeholder="MPESA number"
						onChange={(e)=>setNewNumber(e.target.value)}

					/>
					<Button variant="contained" onClick={createUser}>SUBMIT DETAILS</Button>
				</Popover>
			</CardActions>
		</Card>
	);
}
