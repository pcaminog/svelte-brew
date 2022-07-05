<script>
	import { loadUserInfo } from '../stores/usernameStore.js';
	import { user } from '../stores/sessionStore.js';

</script>

<div>
		{#if $user}
			<div>Brew It</div>
			<div></div>
		{:else}
			<div>Brew It</div>
		{/if}
</div>
