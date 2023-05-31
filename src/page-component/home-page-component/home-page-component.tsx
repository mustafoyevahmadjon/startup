import React from 'react'
import {
	Categories,
	Hero,
	HowItWorks,
	Instructors,
	Newsletter,
	PopularCourses,
	Sposorship,
	Testimonials
} from "@/components";
import {Stack} from "@chakra-ui/react";

const HomePageComponent = () => {
	return (
		<Stack spacing={10}>
			<Hero />
			<Categories />
			<PopularCourses />
			<HowItWorks />
			<Instructors />
			<Testimonials />
			<Newsletter />
			<Sposorship />
		</Stack>
	)
}

export default HomePageComponent