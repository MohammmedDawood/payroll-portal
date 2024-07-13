import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Button,
  Container,
  Paper,
  Title,
  Space,
  Group,
  Anchor,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/slices/authSlice"; // Adjust the import path as needed
import { useRoutes } from "../../../hooks/useRoutes";

function Login() {
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
    validate: {
      username: (value) =>
        value.length < 2 ? "Username must have at least 2 characters" : null,
      password: (value) =>
        value.length < 6 ? "Password must have at least 6 characters" : null,
    },
  });
  /* --------------------------------- Hooks --------------------------------- */
  const { ROUTES } = useRoutes();
  const navigate = useNavigate();

  /* ----------------------------- Redux Dispatch ---------------------------- */
  const dispatch = useDispatch();

  const handleSubmit = (values: { username: string; password: string }) => {
    dispatch(login(values));
    navigate(
      ROUTES.dashboard.to() // Redirect after successful login
    );
  };

  return (
    <Container size={420} my={40}>
      <Paper p='lg' radius='md' withBorder>
        <Title order={2}>Sign In</Title>
        <Space h='md' />
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label='Username'
            placeholder='Your username'
            required
            {...form.getInputProps("username")}
          />
          <Space h='md' />
          <PasswordInput
            label='Password'
            placeholder='Your password'
            required
            {...form.getInputProps("password")}
          />
          <Space h='md' />
          <Button fullWidth type='submit'>
            Login
          </Button>
        </form>
        <Space h='md' />
        <Group justify='space-between' mt='l'>
          <Anchor
            component='button'
            type='button'
            c='dimmed'
            onClick={() => navigate(ROUTES.signup.to())}
            size='sm'
          >
            Don't have an account? Register here
          </Anchor>
        </Group>
      </Paper>
    </Container>
  );
}

export default Login;
