<script>
	import { user } from '../stores/sessionStore.js';
	import { supabase } from '$lib/supabaseClient.js';
	import Auth from '$lib/Auth.svelte';
	import AddBrewButton from '$lib/AddBrewButton.svelte';
	import BrewTable from '$lib/BrewTable.svelte';
	import { brews } from '../stores/brewStores.js';
    

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session.user);
	});
</script>

<div>
	<h1>Brew It ☕️</h1>
	<h2>A place for coffee lovers to share their brews</h2>
	<BrewTable data={$brews} />

	<p>Add your recipe</p>
	{#if $user}
		<AddBrewButton />
	{:else}
		<Auth />
	{/if}
</div>
