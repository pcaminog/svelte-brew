<script>
	import SvelteTable from 'svelte-table';
	export let data;
	import { goto } from '$app/navigation';
import { loadBrews } from '../stores/brewStores';

	function handleClick(event) {
		let path = event.detail.row.id;
		goto('/' + path);
	}

	loadBrews()

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
			title: 'WATER',
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

<div
class="rounded border-t-2 border-b-2 min-w-full p-2 text-xl "
>
	{#await data then brew}
		<SvelteTable {columns} rows={brew} on:clickRow={handleClick} 
		classNameTable='tablemain'
		classNameRow=' tablerow hover:bg-gris'
        />
	{/await}
</div>
