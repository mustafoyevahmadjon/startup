import React from 'react'
import { TextFieldProps } from './text-field.props'
import { ErrorMessage, FieldHookConfig, useField } from "formik";
import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup } from "@chakra-ui/react";

const TextField = ({ label, placeholder, type, children, disabled, ...props }: TextFieldProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  return (
    <FormControl mt={15} isRequired isInvalid={!!meta.touched && !!meta.error}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input
          focusBorderColor='facebook.500'
          placeholder={placeholder}
          h={14}
          type={type}
          disabled={disabled}
          {...field}
        />
        {children}
      </InputGroup>
      <FormErrorMessage>
        <ErrorMessage name={field.name} />
      </FormErrorMessage>
    </FormControl>
  )
}

export default TextField