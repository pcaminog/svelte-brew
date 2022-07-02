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

  loadBrews()
</script>

<div>
	<p>MACHINE 🤖</p>
	<p>MODEL ⚙️</p>
	<p>WATER 💧</p>
	<p>COFFEE 🫘</p>
	<p>GRAMS ⚖️</p>
	<p>TIME ⏱</p>
	<input
		id="machine"
		maxLength={50}
		minLength={5}
		placeholder="Brevilles, Nespresso,.."
		bind:value={brew.machine}
	/>
	<input
		id="model"
		maxLength={50}
		minLength={5}
		placeholder="Barista, Tassimo,.."
		bind:value={brew.model}
	/>
	<input
		id="water_type"
		maxLength={20}
		minLength={3}
		placeholder="Mineral, Fitered,.."
		bind:value={brew.water_type}
	/>
	<input
		id="coffee"
		maxLength={50}
		minLength={5}
		placeholder="Lavazza supreme, Seattle Coffee,.."
		bind:value={brew.coffee}
	/>
	<input id="grams" type="number" max={999} placeholder="In grams" bind:value={brew.grams} />
	<input id="time" type="number" max={999} placeholder="In seconds" bind:value={brew.time} />
	<button on:click|preventDefault={handleSubmit}> Add it </button>
</div>
