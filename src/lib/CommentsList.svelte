<script>
	import { loadComments } from '../stores/commentStore.js';
	import { page } from '$app/stores';
	import { loadUserInfo } from '../stores/usernameInfo.js';
	import { user } from '../stores/sessionStore.js';
	import Time from "svelte-time";

	export let datacom;

	const path = $page.params.brew;

	loadUserInfo($user.id);
	loadComments(path);
</script>

<div class="rounded border-2 w-3/4 p-2">
	{#await datacom then com}
		{#if com.length === 0}
			No comments! Please be the first one to add a comment 👆
		{:else}
			{#each com as c}
				<p class="p-2 border-2 border-sec">{c.comment}</p>

				<p class=" p-2 border-2 border-pri">
					{#if c.user === ''}
						Unknown user
					{:else}
						{c.user}
						<Time relative timestamp={c.createdAt} />
					{/if}
				</p>
			{/each}
		{/if}
	{/await}
</div>
