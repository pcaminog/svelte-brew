<script>
	import { user } from '../../stores/sessionStore.js';
	import Footer from '$lib/Footer.svelte';
	import { supabase } from '../../utils/supabaseClient.js';

	async function loadUserInfo(email) {
		const { data, error } = await supabase.from('usernames').select('user').eq('email', email);
		if (error) {
			return console.error(error);
		}
		return data;
	}

</script>

<div
class="flex flex-col border-collapse overflow-y-hidden"
>
	<div class="flex items-center justify-center h-screen font-mono">
		<div class="grid place-items-center w-3/4 gap-10 m-5">
			<h1>User Settings</h1>
			<div>User Email: email</div>
			<div>UserName: email</div>
			<div>Avatar: email</div>
		</div>
	</div>
	<Footer />
</div>
