<script>
	import { user } from '../stores/sessionStore.js';
	import { supabase } from '$lib/supabaseClient.js';
	import Auth from '$lib/Auth.svelte';
	import { brew } from '../stores/brewStores.js';
    import BrewSingleTable from '$lib/BrewSingleTable.svelte'


	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session.user);
	});
</script>

<div>
	<h1>Brew It ☕️</h1>
	{#if $user}
		<h2>A place for coffee lovers to share their brews</h2>
        <BrewSingleTable data={$brew} />
		<p>Comments</p>

	{:else}
		<Auth />
	{/if}
</div>
