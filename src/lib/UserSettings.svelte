<script>
	import { page } from '$app/stores';
	import { loadUserInfo, updateUserName } from '../stores/usernameInfo';
	import avatar from '$lib/assets/avatar.png';
    export let datauser;


	const path = $page.params.user;
	loadUserInfo(path);
	let name = '';

	const handleSubmit = () => {
		updateUserName(name, path);
		name = '';
	};
</script>

{#await datauser then user}
{#each user as u}
	<div class=" text-2xl p-4">User email:</div>
	<div class=" text-2xl p-4" >{u.email}</div>
	<div class=" text-2xl p-4">User name:</div>
	{#if u.name === null}
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
			<input
				class=" text-base border-2 rounded m-2 pl-2 "
				id="user"
				placeholder={u.user}
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
    {/each}
{/await}
