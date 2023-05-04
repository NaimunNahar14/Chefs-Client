import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>These terms and conditions ("Terms") govern your use of our website ("Website"), which provides information and services related to chefs and recipes. By using our Website, you agree to these Terms and our Privacy Policy, which can be found on our Website.You may use our Website for lawful purposes only. You are prohibited from using our Website to violate any applicable laws, regulations, or third-party rights. You are responsible for all activities that occur under your account, and you must keep your account credentials secure and confidential.</p>
            <p>Go to <Link to='/register'>register</Link></p>
        </div>
    );
};

export default Terms;
