<script>
	import { user } from '../stores/sessionStore.js';
	import { supabase } from '../utils/supabaseClient.js';
	import Auth from '$lib/Auth.svelte';
	import { brew } from '../stores/brewStores.js';
	import { comments } from '../stores/commentStore';
	import BrewSingleTable from '$lib/BrewSingleTable.svelte';
	import CommentsList from '$lib/CommentsList.svelte';
	import CommentForm from '$lib/CommentForm.svelte';
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
				{#if $user}
					<BrewSingleTable databrew={$brew} />
					<CommentForm />
					<CommentsList datacom={$comments} />
					<a 
					class="m-6 p-2 border-2 hover:bg-negro hover:text-blanco animate-pulse"
					href="/">← Go Home </a>
				{:else}
					<Auth />
				{/if}
			</div>
		</div>
	</div>
	<Footer />
</div>
