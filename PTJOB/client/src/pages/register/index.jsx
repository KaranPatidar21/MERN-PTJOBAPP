import { Box, Button, TextField, Typography } from "@mui/material";

function Register() {
  return (
    <Box className="auth-page">
      <Box className="auth-card">
        <Typography variant="h3" className="auth-title">
          Create account
        </Typography>

        <Typography className="auth-subtitle">
          Register to start applying for jobs and posting opportunities.
        </Typography>

        <Typography className="auth-label">
          Full name
        </Typography>
        <TextField fullWidth placeholder="Your name" className="auth-field" />

        <Typography className="auth-label">
          Email address
        </Typography>
        <TextField fullWidth placeholder="you@example.com" className="auth-field" />

        <Typography className="auth-label">
          Password
        </Typography>
        <TextField
          fullWidth
          type="password"
          placeholder="Create a password"
          className="auth-field"
        />

        <Button
          fullWidth
          variant="contained"
          className="auth-button"
        >
          Create account
        </Button>
      </Box>
    </Box>
  );
}

export default Register;
