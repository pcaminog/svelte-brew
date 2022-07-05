<script>
	import { user } from '../stores/sessionStore.js';
	import { supabase } from '$lib/supabaseClient.js';
	import Auth from '$lib/Auth.svelte';
	import AddBrewButton from '$lib/AddBrewButton.svelte';
	import BrewTable from '$lib/BrewTable.svelte';
	import { brews } from '../stores/brewStores.js';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session.user);
	});
</script>

<div>
	<Header />
	<div class="flex items-center justify-center h-screen font-mono">
		<div class="grid place-items-center w-3/4 gap-10 m-5">
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
	</div>
	<Footer />
</div>
