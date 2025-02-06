import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Heading from '../../utils/heading';
import { data } from '../../data/servicesData';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

const StyledStack = styled(Stack)`
	&& {
		padding: 4rem 5rem;
		align-items: center;
		text-align: center;
		gap: 2rem;
		box-shadow: var(--red-shadow);
		border-radius: 10px;
		background: var(--card-background);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		cursor: pointer;
	}
	&:hover {
		transform: translateY(-10px);
		box-shadow: var(--hover-shadow);
	}

	@media (max-width: 1024px) {
		&& {
			padding: 3rem 2rem;
			gap: 1.5rem;
		}
	}

	@media (max-width: 768px) {
		&& {
			padding: 2rem 1.5rem;
			gap: 1.2rem;
		}
	}

	@media (max-width: 480px) {
		&& {
			padding: 1.5rem 1rem;
			gap: 1rem;
		}
	}
`;

const Services = () => {
	return (
		<Box className="about container second-black-container">
			<Heading id="services" headerText="Services" />
			<Stack
				sx={{
					flexDirection: { xs: 'column', lg: 'row' },
					flexWrap: 'wrap',
					justifyContent: 'center',
					alignItems: 'center',
					gap: { xs: 4, sm: 6, lg: 8 },
					padding: { xs: '10px', sm: '25px' },
				}}>
				{data.map((el) => {
					let transform =
						el.name === 'Web Design' ? 'translateX(-60%)' : 'translateX(60%)';
					return (
						<StyledStack
							as={motion.div}
							initial={{
								transform: transform,
								opacity: 0,
							}}
							whileInView={{ transform: 'translateX(0%)', opacity: 1 }}
							transition={{
								delay: 0.3,
								duration: 0.8,
							}}
							viewport={{ once: true }}
							key={el.id}
							sx={{
								width: { xs: '100%', sm: '80%', lg: '45%' },
								minWidth: { sm: '280px', lg: '320px' },
							}}>
							{el.icon}
							<Typography
								variant="h4"
								color="var(--white-text)"
								fontSize={{ xs: '1.5rem', sm: '1.8rem' }}
								marginBottom="0.5rem">
								{el.name}
							</Typography>
							<Typography
								variant="body1"
								sx={{
									color: 'var(--dark-gray-text)',
									letterSpacing: '2px',
									lineHeight: { xs: '1.5', sm: '1.8', lg: '2' },
									fontSize: { xs: '0.9rem', sm: '1rem' },
								}}>
								{el.explain}
							</Typography>
						</StyledStack>
					);
				})}
			</Stack>
		</Box>
	);
};

export default Services;
