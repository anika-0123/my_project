function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    

    if (name === '') {
        alert('Please enter your name.');
        return false;
    }
    

   if (email === '') {
        alert('Please enter your email.');
        return false;
    }


    if (password === '') {
        alert('Please enter your password.');
        return false;
    }


    if (confirmPassword === '') {
        alert('Please confirm your password.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');

        return false;
    }
    if (password.length < 5 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        alert('Your password must be at least 5 characters long and contain at least one special character.');
        return false;
    }
    
    alert('Form submitted successfully!');
    return true;
}
function login(){
    const name = document.getElementById('name').value.trim();
    const password = document.getElementById('password').value.trim();

    if (name === '') {
        alert('Please enter your name.');
        return false;
    }
    
    if (password  === '') {
        alert('Please enter your password.');
        return false;
    }
    if (password.length < 5 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        alert('Your password must be at least 5 characters long and contain at least one special character.');
        return false;
    }
    
    alert('Form submitted successfully!');
    return true;
}