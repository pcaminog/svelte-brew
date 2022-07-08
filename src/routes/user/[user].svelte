<script>
	import Footer from '$lib/Footer.svelte';
	import UserSettings from '../../lib/UserSettings.svelte';
	import { userinfo } from '../../stores/usernameInfo';
</script>

<div>
	<div class="flex items-center justify-center h-screen font-mono">
		<div class="grid grid-cols-2 place-items-center w-auto h-auto  border">
			<h1 class=" text-5xl underline col-span-2 p-4">User Settings</h1>
			<UserSettings datauser={$userinfo} />
		</div>
	</div>
	<Footer />
</div>
