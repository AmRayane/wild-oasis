import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import { useAuth } from "./useAuth";
import Spinner from "../../ui/Spinner";

function LoginForm() {
  const [email, setEmail] = useState("user@test145.com");
  const [password, setPassword] = useState("12345678");
  const { login, isLoading } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow>
        <Button disabled={isLoading} variation="primary" size="large">
          {isLoading ? "sign in ..." : "Login"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
