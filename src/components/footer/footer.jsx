import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LogoImage from '../../assets/images/aounilogo.jpeg';
import Upwork from '../../assets/icons/upwork 1.svg';
import Linkedin from '../../assets/icons/linkedin.svg';
import Github from '../../assets/icons/github2.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Mostaql from '../../assets/icons/Mostaql.svg';
import WhatsApp from '../../assets/icons/whatsapp.svg';

const Footer = () => {
	const [year, setYear] = useState();

	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);
	return (
		<Box
			component="footer"
			id="contact"
			className="footer black-container"
			textAlign="center">
			<Stack
				justifyContent="center"
				alignItems="center"
				padding="2rem 0 0.5rem"
				borderRadius="50%"
				gap="1rem">
				<Box>
					<a href="/">
						<img
							//width="55px"
							style={{ width :"55px" ,height:"auto" ,borderRadius:"50%" }}
							src={LogoImage}
							alt="Aouni Chaker"
						/>
					</a>
				</Box>
				<Stack
					direction="row"
					alignItems="center"
					gap="1rem">
				
					
					<a
						href="https://wa.me/+21652488429"
						target="_blank"
						rel="noreferrer">
						<img
							src={WhatsApp}
							alt="Send me a message"
						/>
					</a>
					<a
						href="https://github.com/cheker-135"
						target="_blank"
						rel="noreferrer">
						<img
							src={Github}
							alt="GitHub"
						/>
					</a>
				
				</Stack>
			</Stack>
			<Typography
				variant="overline"
				color="var(--white-text)">
				© Copyright {year} - Aouni Chaker
			</Typography>
		</Box>
	);
};

export default Footer;
