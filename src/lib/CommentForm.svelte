<script>
	import { addComments } from '../stores/commentStore.js';
	import { user } from '../stores/sessionStore.js';
	import { page } from '$app/stores';

	const path = $page.params.brew;

	let comment = {
		user: '',
		comment: '',
		email: $user.email,
		brewId: path
	};

	//console.log(comment)

	const handleSubmit = () => {
		addComments(comment);
		comment = {
			user: '',
			comment: '',
			email: $user.email,
			brewId: path
		};
	};

</script>

<form 
class="w-3/4"
on:submit|preventDefault={handleSubmit}>

	<h1 class="text-2xl border-b-2">Add a comment</h1>
	<textarea
	class="border w-full leading-normal md:w-full px-3 mb-2 mt-2 bg-silver"
	bind:value={comment.comment} 
	maxlength="999"
	resize
	/>

	<input 
	class="border-2 p-2"
	type="submit" value={'Submit'} />
</form>
