import axios from 'axios';
import { useMutation } from 'react-query';
import { baseUrl } from 'src/utils/constants';

export const useLogin = () => useMutation(loginData => axios.post(`${baseUrl}/accounts/login`, loginData));

export const useSignup = () => useMutation(registerData => axios.post(`${baseUrl}/accounts/register`, registerData));
