<script>
	import { user } from '../stores/sessionStore.js';
	import { goto } from '$app/navigation';
	import { supabase } from '../utils/supabaseClient.js';

	async function loadUserInfo(email) {
		const { data, error } = await supabase.from('usernames').select('user').eq('email', email);
		if (error) {
			return console.error(error);
		}
		return data;
	}

	function handleClick() {
		goto('/user/' + $user.id);
	}
</script>

<div
	class=" grid grid-cols-2 gap-3 font-mon mt-0 font-bold text-2xl border-b-2 w-full justify-around justify-self-start"
>
	{#if $user}
		<div class=" m-3">Brew It</div>
		<div class=" m-3 place-self-end">
			<button on:click={handleClick}>⚙️</button>
			{#await loadUserInfo($user.email) then mail}
				{#if mail[0].user === null}
					{$user.email}
				{:else}
					{mail[0].user}
				{/if}
			{/await}
		</div>
	{:else}
		<div class=" m-3">Brew It</div>
		<div class=" m-3 place-self-end">Log In</div>
	{/if}
</div>
