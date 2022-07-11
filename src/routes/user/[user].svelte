<script>
	import Footer from '$lib/Footer.svelte';
	import UserSettings from '../../lib/UserSettings.svelte';
	import { userinfo } from '../../stores/usernameInfo';
</script>

<svelte:head>
	<title>Brew it</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<div>
	<div class="flex flex-col items-center justify-center h-screen font-mono">
		<div class="grid grid-cols-2 place-items-center w-auto h-auto  border">
			<h1 class=" text-5xl underline col-span-2 p-4">User Settings</h1>
			<UserSettings datauser={$userinfo} />
		</div>
		<a 
		class="m-6 p-2 border-2 hover:bg-negro hover:text-blanco animate-pulse"
		href="/">← Go Home </a>
	</div>

	<Footer />
</div>
