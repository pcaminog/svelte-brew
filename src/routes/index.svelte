<script>
	import { user } from '../stores/sessionStore.js';
	import { supabase } from '../utils/supabaseClient.js';
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

<svelte:head>
	<title>Brew it</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<div>
	<div class="flex flex-col h-screen border-collapse overflow-hidden">
		<Header />
		<div class="grid  place-items-center font-mono overflow-y-scroll">
			<div class="grid place-items-center w-3/4 gap-10 m-5">
				<h1 class="text-5xl">Brew It ☕️</h1>
				<h2 class="text-2xl">A place for coffee lovers to share their brews</h2>
				<BrewTable data={$brews} />
				{#if $user}
					<p class="text-2xl">Add your recipe 👇</p>
					<AddBrewButton />
				{:else}
					<p class="text-2xl">Sign in wiht your emamil below to add any your brews.</p>
					<p class="text-5xl">👇</p>
					<Auth />
				{/if}
			</div>
		</div>
	</div>
	<Footer />
</div>
