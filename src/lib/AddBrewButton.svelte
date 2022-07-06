<script>
	import { user } from '../stores/sessionStore.js';
	import { loadBrews, addBrew } from '../stores/brewStores.js';

	let brew = {
		machine: '',
		model: '',
		water_type: '',
		coffee: '',
		grams: '',
		time: '',
		usermail: $user.email
	};

	const handleSubmit = () => {
		console.log($user);
		console.log(brew);
		addBrew(brew);
		brew = '';
	};

	loadBrews();
</script>
<div 
class=" grid grid-cols-1"
>
<div class=" items-center justify-center grid grid-cols-6  grid-rows-2 gap-5 p-6 gap-y-0">
	<p class="font-extrabold text-2xl">MACHINE 🤖</p>
	<p class="font-extrabold text-2xl">MODEL ⚙️</p>
	<p class="font-extrabold text-2xl">WATER 💧</p>
	<p class="font-extrabold text-2xl">COFFEE </p>
	<p class="font-extrabold text-2xl">GRAMS ⚖️</p>
	<p class="font-extrabold text-2xl">TIME ⏱</p>

	<input
	class=" text-base border-2 rounded p-1"
		id="machine"
		maxLength={50}
		minLength={5}
		placeholder="Brevilles, Nespresso,.."
		bind:value={brew.machine}
	/>
	<input
	class=" text-base border-2 rounded p-1"
		id="model"
		maxLength={50}
		minLength={5}
		placeholder="Barista, Tassimo,.."
		bind:value={brew.model}
	/>
	<input
	class=" text-base border-2 rounded p-1"
		id="water_type"
		maxLength={20}
		minLength={3}
		placeholder="Mineral, Fitered,.."
		bind:value={brew.water_type}
	/>
	<input
	class=" text-base border-2 rounded p-1"
		id="coffee"
		maxLength={50}
		minLength={5}
		placeholder="Lavazza supreme, Seattle Coffee,.."
		bind:value={brew.coffee}
	/>
	<input
	class=" text-base border-2 rounded p-1" id="grams" type="number" max={999} placeholder="In grams" bind:value={brew.grams} />
	<input
	class=" text-base border-2 rounded p-1" id="time" type="number" max={999} placeholder="In seconds" bind:value={brew.time} />
</div>
	<button 
class="text-base border-2 rounded p-1 w-1/5 justify-self-center hover:bg-pri"
	on:click|preventDefault={handleSubmit}> Add it </button>
</div>
