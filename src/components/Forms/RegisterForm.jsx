import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import styled from "styled-components";
import { useSignup } from 'src/api/auth';
import { Input, Button, StyledLink, BlackLink, Title } from './common';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const signupSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Username must be at least 3 characters')
        .required('Username is required'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    // confirmPassword: Yup.string()
    //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
    //     .required('Confirm Password is required'),
    // acceptTerms: Yup.bool()
    //     .oneOf([true], 'Accepting Terms is required')
});



export default function  RegisterForm (pros) {
    const { register, handleSubmit } = useForm({
      resolver: yupResolver(signupSchema),
    });
    const signup = useSignup();
  
    const signup_submit = (userData) => {
      toast.promise(signup.mutateAsync(userData), {
        loading: 'Trying to register...',
        success: (res) => {
          return 'check your email';
        },
        error: (err) => {
          if (!err.response) return 'Network Connection error!';
          else return `Try again.`;
        },
      });
    };
  
    return (
      <form onSubmit={handleSubmit(signup_submit)} role="form">
        <Container>
          <Title>Register</Title>
          <Input type="text" placeholder="Username" {...register('username')} />
          <Input type="text" placeholder="Email" {...register('email')} />
          <Input type="password" placeholder="Password" {...register('password')} />
          {/* <Input type="password" placeholder="Confirm Password" {...register('confirmPassword')} /> */}
          <Button type="submit">Sign Up</Button>
          <div style={{ marginTop: 10 }}>
            Already Registered?{' '}
            <StyledLink className="link" to="/login">
              {' '}
              Login Here{' '}
            </StyledLink>
          </div>
        </Container>
      </form>
    );
  };