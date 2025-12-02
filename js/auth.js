import { supabase } from './supabase.js';

const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', async () => {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        alert("Error: " + error.message);
        return;
    }

    alert("Login correcto");
    window.location.href = "dashboard.html";
});
