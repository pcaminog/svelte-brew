<script>
	import { loadComments } from '../stores/commentStore.js';
	import { page } from '$app/stores';
	export let datacom;
	import Time from 'svelte-time';

	const path = $page.params.brew;

	loadComments(path);
</script>

<div class="rounded border-2 min-w-full p-2">
	{#await datacom then com}
		{#if com.length === 0}
			No comments! Please be the first one to add a comment 👆
		{:else}
			{#each com as c}
				<p class="p-2 border-2 border-sec">{c.comment}</p>

				<p class=" p-2 border-2 border-pri">
					{c.user}
					<Time relative timestamp={c.createdAt} />
				</p>
			{/each}
		{/if}
	{/await}
</div>
