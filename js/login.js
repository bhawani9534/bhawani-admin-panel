
const SUPABASE_URL = 'https://hxjcqbspxipwczkwbict.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4amNxYnNweGlwd2N6a3diaWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NzgwNDIsImV4cCI6MjA2NDI1NDA0Mn0.1zkRoY_pKTQScgN2RLhyDEZlUC-Te2qSZU9OVxvua8Q';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const { data, error } = await client.auth.signInWithPassword({
    email,
    password,
  });

  const msg = document.getElementById('message');
  if (error) {
    msg.innerText = 'Login failed: ' + error.message;
    msg.style.color = 'red';
  } else {
    msg.innerText = 'Login successful!';
    msg.style.color = 'green';
    // redirect to dashboard.html (not included here for simplicity)
  }
}
