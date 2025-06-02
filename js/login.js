
// Replace with your own Supabase project URL and anon key
const supabase = window.supabase.createClient(
  'https://hxjcqbspxipwczkwbict.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4amNxYnNweGlwd2N6a3diaWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NzgwNDIsImV4cCI6MjA2NDI1NDA0Mn0.1zkRoY_pKTQScgN2RLhyDEZlUC-Te2qSZU9OVxvua8Q'
);

async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        document.getElementById("message").textContent = "Login failed: " + error.message;
    } else {
        document.getElementById("message").textContent = "Login successful!";
        // Redirect or show dashboard
    }
}
