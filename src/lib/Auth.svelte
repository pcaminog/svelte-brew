<script>
	import { supabase } from '../utils/supabaseClient.js';
	import Auth from 'supabase-ui-svelte'


	let email;

</script>

<div class="place-items-center grid gap-5 m-10">
	<div class="text-2xl">Do you want to add your brew? or add any comment?</div>
	<div class="text-2xl">Sign in with your email</div>
	<div class="text-5xl">👇</div>

	<Auth supabaseClient={supabase} view="magic_link" providers={['google']} socialColors/>

</div>
