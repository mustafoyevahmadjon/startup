import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/alert";
import { ErrorAlertProps } from "@/components/error-alert/error-alert.props";

const ErrorAlert = ({ title }: ErrorAlertProps) => {
  return (
    <Alert status='error'>
      <AlertIcon />
      <AlertTitle>{title}</AlertTitle>
    </Alert>
  )
}

export default ErrorAlert