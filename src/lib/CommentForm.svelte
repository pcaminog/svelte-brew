<script>
	import { addComments } from '../stores/commentStore.js';
	import { user } from '../stores/sessionStore.js';
	import { page } from '$app/stores';

	const path = $page.params.brew;


    console.log($user.email)

	let comment = {
		user: '',
		comment: '',
		email: $user.email,
		brewId: path
	};

	//console.log(comment)

	const handleSubmit = () => {
		addComments(comment);
		comment = '';
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<h1>Comment</h1>
	<input type="text" bind:value={comment.comment} />
	<input type="submit" value={'Add a Comment'} />
</form>
