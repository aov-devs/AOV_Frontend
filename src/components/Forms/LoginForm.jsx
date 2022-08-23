import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import { useLogin } from 'src/api/auth';
import { Input, Button, StyledLink, BlackLink, Title } from './common';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

export default function LoginForm(props) {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const login = useLogin();

  const login_submit = (userData) => {
    toast.promise(login.mutateAsync(userData), {
      loading: 'Trying to login...',
      success: (res) => {
        localStorage.setItem('access-token', res.data['token']);
        // localStorage.setItem('refresh-token', res.data['refresh']);
        window.location.reload(false);
        return 'You have logged in successfully';
      },
      error: (err) => {
        if (!err.response) return 'Network Connection error!';
        if (err.response.status === 401) return 'Username or Password is wrong!';
        if (err.response.status === 400) return err.response.data['message'];
        else return `Try again.`;
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(login_submit)} role="form">
      <Container>
        <Title>Login</Title>
        <Input type="text" placeholder="Username" {...register('username')} />
        <Input type="password" placeholder="Password" {...register('password')} />
        <BlackLink to="/forget-password">Forgot your password?</BlackLink>
        <Button type="submit" disabled={login.isLoading}>Log In</Button>
        <div style={{ marginTop: 10 }}>
          Not a member?{' '}
          <StyledLink className="link" to="/register">
            {' '}
            Register Now{' '}
          </StyledLink>
        </div>
      </Container>
    </form>
  );
}
