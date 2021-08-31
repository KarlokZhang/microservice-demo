import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import TextInput from '#root/components/shared/TextInput';

const Label = styled.label`
  display: block;

  :not(:first-child){
    margin-top.75rem;
  }
`;

const LabelText = styled.strong`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

const LoginButton = styled.button`
  display: inline-block;
  margin-top: 0.5rem;
`;

const Login = () => {
  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm();

  const onSubmit = handleSubmit(({ email, password }) => {
    console.log(email, password);
  });
  return (
    <form onSubmit={onSubmit}>
      <Label>
        <LabelText>Email</LabelText>
        <TextInput
          disabled={isSubmitting}
          name="email"
          type="email"
          {...register('email')}
        />
      </Label>
      <Label>
        <LabelText>Password</LabelText>
        <TextInput
          disabled={isSubmitting}
          name="password"
          type="password"
          {...register('password')}
        />
      </Label>
      <LoginButton disable={isSubmitting} type="submit">
        Login
      </LoginButton>
    </form>
  );
};

export default Login;
