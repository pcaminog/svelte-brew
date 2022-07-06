<script>
	import Footer from '$lib/Footer.svelte';
	import { page } from '$app/stores';
	import { loadUserInfo } from '../../utils/usernameInfo';
	import avatar from '$lib/assets/avatar.png';

	const path = $page.params.user;
	let usr = loadUserInfo(path);
</script>

<div>
	<div class="flex items-center justify-center h-screen font-mono">
		<div class="grid place-items-center w-2/4 h-2/3 gap-10 m-5 border">
			<h1
            class=" text-5xl underline">User Settings</h1>
			{#await usr then u}
				<div class=" text-2xl">User email: {u[0].email}</div>
				<div class=" text-2xl">User name: {u[0].user}</div>
				<div 
                class="  text-2xl w-12 h-12 rounded-full"
                >Avatar: <img
                alt="The project logo" src={avatar} /></div>
			{/await}
		</div>
	</div>
	<Footer />
</div>
