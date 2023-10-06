import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";


return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={login}>
          <TextField
            required
            onChange={handleTextChange}
            value={state.username}
            name="Dish Size"
            label="Dish Size"
            type="text"
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.password}
            name="lat-lon"
            label="lat-lon"
            type="text"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
};
