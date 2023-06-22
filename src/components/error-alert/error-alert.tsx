import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/alert";
import { ErrorAlertProps } from "@/components/error-alert/error-alert.props";
import { Icon } from "@chakra-ui/react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const ErrorAlert = ({ title, clearHandler }: ErrorAlertProps) => {
  const { t } = useTranslation()

  return (
    <Alert status='error' pos={"relative"}>
      <AlertIcon />
      <AlertTitle>{t(title, { ns: "global" })}</AlertTitle>
      <Icon onClick={clearHandler} pos={"absolute"} right={3} top={3} as={AiFillCloseCircle} cursor={"pointer"} w={5} h={5} />
    </Alert>
  )
}

export default ErrorAlert