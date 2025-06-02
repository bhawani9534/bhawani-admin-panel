
const SUPABASE_URL = "https://hxjcqbspxipwczkwbict.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4amNxYnNweGlwd2N6a3diaWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NzgwNDIsImV4cCI6MjA2NDI1NDA0Mn0.1zkRoY_pKTQScgN2RLhyDEZlUC-Te2qSZU9OVxvua8Q";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  const messageEl = document.getElementById("message");
  if (error) {
    messageEl.textContent = "Login failed: " + error.message;
    messageEl.style.color = "red";
  } else {
    messageEl.textContent = "Login successful!";
    messageEl.style.color = "green";
  }
}
