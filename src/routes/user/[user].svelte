<script>
	import Footer from '$lib/Footer.svelte';
	import { page } from '$app/stores';
	import { loadUserInfo, updateUserName } from '../../utils/usernameInfo';
	import avatar from '$lib/assets/avatar.png';

	const path = $page.params.user;
	let usr = loadUserInfo(path);
	let name = ''
	console.log(path, ' $ ' ,name)

	const handleSubmit = () => {
		updateUserName(name, path)
		name = '';
	};


</script>

<div>
	<div class="flex items-center justify-center h-screen font-mono">
		<div class="grid grid-cols-2 place-items-center w-auto h-auto  border">
			<h1 class=" text-5xl underline col-span-2 p-4">User Settings</h1>
			{#await usr then u}
				<div class=" text-2xl p-4">User email:</div>
				<div class=" text-2xl p-4">{u[0].email}</div>
				<div class=" text-2xl p-4">User name:</div>
				{#if u[0].user === null}
				<div>
					<input
						class=" text-base border-2 rounded m-2 pl-2 "
						id="user"
						placeholder="Create Username"
						maxLength={50}
						minLength={2}
						bind:value={name}
					/><button
						on:click|preventDefault={handleSubmit}
						class=" text-base border-2 hover:bg-negro hover:text-blanco animate-pulse pl-2 pr-2"
						>Create</button
					>
				</div>
				{:else}
					<div class=" text-2xl">
						{u[0].user}
						<input 
						class=" text-base border-2 rounded m-2 pl-2 " 
						id="user" 
						placeholder={u[0].user} 
						maxLength={50} 
						minLength={2} 
						bind:value={name}
						/><button
						on:click|preventDefault={handleSubmit}
						class=" text-base border-2 hover:bg-negro hover:text-blanco animate-pulse pl-2 pr-2"
						>Update</button
					>
					</div>
				{/if}
				<div class=" text-2xl p-4">Avatar:</div>
				<div>
					<img class="text-2xl w-12 h-12 rounded-full" alt="The project logo" src={avatar} />
				</div>
			{/await}
		</div>
	</div>
	<Footer />
</div>
