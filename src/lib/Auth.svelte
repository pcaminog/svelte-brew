<script>
    import {supabase} from "$lib/supabaseClient.js"
  
    let loading = false
    let email;
  
    const handleLogin = async () => {
      try {
        loading = true
        const { error } = await supabase.auth.signIn({ email })
        if (error) throw error
        alert('Check your email for the login link!')
      } catch (error) {
        alert(error.error_description || error.message)
      } finally {
        loading = false
      }
    }
  </script>
  
  <form on:submit|preventDefault={handleLogin}>
      <h1>Brew It Login</h1>
      <p>Sign in via magic link with your email below</p>
        <input
          type="email"
          placeholder="Your email"
          bind:value={email}
        />
        <input type="submit"value={loading ? "Loading" : "Send magic link"} disabled={loading} />
  </form>