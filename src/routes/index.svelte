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

<div
class="flex flex-col border-collapse overflow-y-hidden"

>
	<Header />
	<div class="flex items-center justify-center h-screen font-mono">
		<div class="grid place-items-center w-3/4 gap-10 m-5">
			<h1
            class=" text-5xl"
            >Brew It ☕️</h1>
			<h2
            class=" text-2xl"
            >A place for coffee lovers to share their brews</h2>
			<BrewTable data={$brews} />

			<p
            class=" text-2xl"
            >Add your recipe 👇</p>
			{#if $user}
				<AddBrewButton />
			{:else}
				<Auth />
			{/if}
		</div>
	</div>
	<Footer />
</div>
