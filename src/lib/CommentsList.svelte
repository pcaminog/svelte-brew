<script>
	import { loadComments } from '../stores/commentStore.js';
	import { page } from '$app/stores';
	export let datacom;

	const path = $page.params.brew;

	loadComments(path);
	//console.log(datacom)
</script>

<div>
	{#await datacom then com}
		{#each com as c}
			<p>{c.comment}</p>
			<p>{c.user}</p>
			<p>{c.createdAt}</p>
		{/each}
	{/await}
</div>
