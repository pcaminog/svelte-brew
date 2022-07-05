<script>
	import SvelteTable from 'svelte-table';
	import { page } from '$app/stores';
	import { loadBrew } from '../stores/brewStores.js';
	export let databrew;

	const path = $page.params.brew;

	loadBrew(path);

	const columns = [
		{
			key: 'machine',
			title: 'MACHINE',
			value: (v) => v.machine,
			sortable: false
		},
		{
			key: 'model',
			title: 'MODEL',
			value: (v) => v.model,
			sortable: false
		},
		{
			key: 'water_type',
			title: 'WATER_TYPE',
			value: (v) => v.water_type,
			sortable: false
		},
		{
			key: 'coffee',
			title: 'COFFEE',
			value: (v) => v.coffee,
			sortable: false
		},
		{
			key: 'grams',
			title: 'GRAMS',
			value: (v) => v.grams,
			sortable: false
		},
		{
			key: 'time',
			title: 'TIME',
			value: (v) => v.time,
			sortable: false
		}
	];
</script>

<div>
	{#await databrew then brew}
		<SvelteTable {columns} rows={brew} />
	{/await}
</div>
