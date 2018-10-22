import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Home = () => (
    <div className="text-right">
        <p className="position-absolute">Non Logged in Landing Page</p>
        <Button
            component={Link}
            to="/login"
            className="button-link"
            variant="contained"
            color="primary"
        >
      Login
        </Button>
    </div>
);

export default Home;
