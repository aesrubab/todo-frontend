document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const email = document.getElementById('loginEmail').value
    const password = document.getElementById('loginPassword').value

    try {
        const response = await fetch('http://localhost:5001/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        console.log(email,password)

        const data = await response.json();

        if (response.ok) {
            document.cookie = `accessToken=${data.token};path=/`; 
            window.location.href = 'todo.html';
        } else {
            alert(data.message); 
        }

    } catch (error) {
        alert(error);
    }
});
