<script>
	import { loadUserInfo } from '../stores/usernameStore.js';
	import { user } from '../stores/sessionStore.js';

loadUserInfo(user.email)

</script>

<div>
		{#if $user}
			<div>Brew It</div>
			<div>{$user.email}</div>
		{:else}
			<div>Brew It</div>
		{/if}
</div>
