import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Heading from '../../utils/heading';
import CustomButton from '../../utils/customButton';
import { styled } from 'styled-components';
import { data } from '../../data/aboutData';
import CV from '../../assets/CV/cv Cheker-Ouni.pdf';
import { motion } from 'framer-motion';

const CustomizeStack = styled(Stack)`
	position: relative;
	margin-right: 2rem;
	&::before {
		content: '';
		position: absolute;
		left: -5rem;
		top: -12.5%;
		width: 1px;
		height: 125%;
		background-color: var(--white-text);
		
	}
`;

const infoVariant = {
	hidden: {
		transform: 'translateX(100%)',
	},
	visible: {
		transform: 'translateX(0%)',
		transition: {
			delay: 1.5,
			type: 'spring',
			duration: 1,
		},
	},
};

const buttonVariant = {
	hidden: {
		transform: 'translateY(100%)',
	},
	visible: {
		transform: 'translateY(0%)',
		transition: {
			delay: 1.5,
			type: 'spring',
			duration: 1,
		},
	},
};

const sideVariant = {
	hidden: {
		transform: 'scale(0)',
	},
	visible: {
		transform: 'scale(1)',
		transition: {
			duration: 1,
			type: 'spring',
			delay: 1,
		},
	},
};

const handVariants = {
	hidden: {
		rotate: 8,
	},
	visible: {
		rotate: -8,
		transition: {
			repeat: 8,
			repeatType: 'reverse',
			duration: 3,
			type: 'spring',
			stiffness: 500,
		},
	},
};
const About = () => {
	return (
		<Box className="about container black-container">
			<Heading
				headerText="About me"
				id="about"
			/>
			<Stack
				sx={{
					flexDirection: { xs: 'column', lg: 'row' },
				}}
				justifyContent="space-between"
				marginY={3}>
				<Stack
					spacing={5}
					justifyContent="space-between"
					sx={{
						width: { xs: '100%', lg: '60%' },
						alignItems: { xs: 'center', sm: 'flex-start' },
						overflow: 'hidden',
					}}>
					<Typography
						component={motion.p}
						variants={infoVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variant="body1"
						sx={{ fontSize: { xs: '16px', lg: '20px' } }}
						className="gray-text">
						<h3>
							Hello, I'm Chaker
							<span
								style={{
									display: 'inline-block',
									marginLeft: '5px',
									paddingBottom: '5px',
									transform: 'translateY(-5px)',
								}}>
								<motion.span
									style={{
										display: 'inline-block',
										transformOrigin: ' bottom right ',
									}}
									variants={handVariants}
									whileInView="visible">
									👋
								</motion.span>
							</span>
						</h3>
						<p>
						I am a passionate Full Stack Web Developer with a strong expertise in the MERN stack (MongoDB, Express.js, React, Node.js) and a broad skill set across other cutting-edge technologies. I thrive on crafting seamless, scalable, and user-friendly web applications that bridge design and functionality.
						</p>
						<p>
						With a solid foundation in front-end and back-end development, I specialize in creating dynamic user interfaces, developing robust APIs, and optimizing database architecture. My experience includes building responsive websites, single-page applications, and full-fledged systems tailored to meet diverse business needs.
						</p>
					</Typography>
					<motion.a
						href={CV}
						variants={buttonVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						download="Aouni Chaker CV_"
						target="_blank"
						rel="noreferrer"
						style={{ width: 'fit-content' }}>
						<CustomButton
							beforeWidth="100%"
							beforeBgColorHover="transparent"
							hoverColor="var(--white-text)"
							textColor="black"
							content="Download my CV"></CustomButton>
					</motion.a>
				</Stack>
				<CustomizeStack
					as={motion.div}
					variants={sideVariant}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					sx={{
						display: { xs: 'none', lg: 'flex' },
						transformOrigin: 'center',
					}}
					justifyContent="center">
					<Stack
						spacing={7}
						overflow="hidden"
						sx={{
							display: { xs: 'none', lg: 'flex' },
						}}>
						{data.map((el, index) => {
							let delay = index;
							delay += 2.5;
							return (
								<Stack
									component={motion.div}
									initial={{ transform: 'translateX(-120%)' }}
									whileInView={{ transform: 'translateX(0%)' }}
									transition={{ duration: 0.8, type: 'spring', delay: delay }}
									viewport={{ once: true }}
									direction="row"
									spacing={1}
									alignItems="center"
									key={el.id}>
									<Typography
										variant="body1"
										fontSize="1rem"
										className="white-text"
										fontWeight="bold">
										{el.name}:
									</Typography>
									<Typography
										variant="body2"
										fontSize="1rem"
										className="gray-text"
										lineHeight="0">
										{el.value}
									</Typography>
								</Stack>
							);
						})}
					</Stack>
				</CustomizeStack>
			</Stack>
		</Box>
	);
};

export default About;
