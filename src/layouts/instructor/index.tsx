import { FC, FunctionComponent, useState } from 'react'
import { LayoutProps } from '../layout.props'
import { Box, Container } from '@chakra-ui/react'
import Header from '../header/header'
import Footer from '../footer/footer'
import InstructorSidebar from '../sidebar/instructor-sidebar'

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false)
  const onToggle = () => setToggle(prev => !prev)
  return (
    <Box maxW={"full"} overflow={"hidden"}>
      <Header onToggle={onToggle} />
      <InstructorSidebar toggle={toggle} />
      <Box mt={"11vh"} pl={{ base: 0, lg: "320px" }} transition={"all .4s ease-in-out"}>
        <Container maxW={"container.lg"}>{children}</Container>
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout

export const withInstructorLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
}