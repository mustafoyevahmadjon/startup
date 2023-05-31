import { DarkLogo, Eng, LightLogo, Rus, Uzb } from '@/icons'
import { Box, Button, Flex, HStack, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"
import { MdOutlineContactSupport } from "react-icons/md"
import { BsTranslate } from "react-icons/bs"
import { BiMenuAltLeft, BiUserCircle } from "react-icons/bi"
import Link from "next/link";
import { HeaderProps } from "@/layouts/header/header.props";
import { language } from "@/config/constants";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import { bottom } from "@popperjs/core";
import { useRouter } from "next/router";

const Header = ({ onToggle }: HeaderProps) => {
	const { toggleColorMode, colorMode } = useColorMode()
	const { t, i18n } = useTranslation()
	const headingMenuItemColor = useColorModeValue("Background", "#e2e8f0")
	const router = useRouter();
	const onLanguage = (lng: string) => {
		router.replace(router.asPath);
		i18n.changeLanguage(lng)
	}
	return (
		<Box
			zIndex={1001}
			left={0}
			right={0}
			pos={"fixed"}
			top={0}
			w={"full"}
			h={"10vh"}
			px={"10"}
			borderBottom={"1px"}
			borderBottomColor={colorMode == "light" ? '#e2e8f0' : "rgba(255,255,255,0.16)"}
			bg={useColorModeValue("gray.50", "gray.900")}
			color={useColorModeValue('gray.700', 'gray.200')}
		>
			<Flex h={"full"} justify={"space-between"} align={"center"}>
				<HStack>
					<Icon onClick={onToggle} as={BiMenuAltLeft} w={8} h={8} cursor={"pointer"} />
					<Link href={"/"}>
						{colorMode === "light" ? <DarkLogo /> : <LightLogo />}
					</Link>
				</HStack>
				<HStack>
					<IconButton onClick={toggleColorMode} aria-label='color-mode' icon={colorMode == "light" ? <BsFillMoonStarsFill /> : <BsFillSunFill />} colorScheme='whatsapp' variant={"ghost"} />
					<Menu placement={"bottom-start"}>
						<MenuButton textTransform={'capitalize'} as={Button} rightIcon={<BsTranslate />} colorScheme='facebook' variant={'solid'}>
							{i18n.resolvedLanguage}
						</MenuButton>
						<MenuList style={{ zIndex: "999" }} p={0}>
							{language.map((item, idx) => (
								<MenuItem key={idx} backgroundColor={i18n.resolvedLanguage === item.lng ? "facebook.500" : ""} color={i18n.resolvedLanguage === item.lng ? headingMenuItemColor : ""} gap={2} onClick={() => onLanguage(item.lng)}>{item.nativeLng} {<item.icon />}</MenuItem>
							))}
						</MenuList>
					</Menu>
					<Button colorScheme={"gray"} rightIcon={<BiUserCircle />} onClick={() => router.push("/auth")}>{t("login", { ns: "layout" })}</Button>
				</HStack>
			</Flex>
		</Box>
	)
}

export default Header
// Navbar component