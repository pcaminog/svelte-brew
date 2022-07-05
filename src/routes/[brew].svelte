<script>
	import { user } from '../stores/sessionStore.js';
	import { supabase } from '$lib/supabaseClient.js';
	import Auth from '$lib/Auth.svelte';
	import { brew } from '../stores/brewStores.js';
    import { comments } from '../stores/commentStore'
	import  BrewSingleTable  from '$lib/BrewSingleTable.svelte';
	import  CommentsList  from '$lib/CommentsList.svelte';
	import  CommentForm  from '$lib/CommentForm.svelte';
    import Footer from '$lib/Footer.svelte'
    import Header from '$lib/Header.svelte'

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session.user);
	});
</script>

<div>    
    <Header />
	<h1>Brew It ☕️</h1>
	{#if $user}
		<h2>A place for coffee lovers to share their brews</h2>
		<BrewSingleTable databrew={$brew} />
		<CommentForm />
        <CommentsList datacom={$comments} />
        {:else}
		<Auth />
	{/if}
    <Footer />

</div>
