document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    try {
        const response = await fetch('http://localhost:5001/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            document.cookie = `accessToken=${data.token};path=/`;
            window.location.href = 'login.html'; 
        } else {
            alert(data.message || 'Registration failed. Please try again.');
        }
    } catch (error) {
        alert('An error occurred: ' + error.message);
    }
});
