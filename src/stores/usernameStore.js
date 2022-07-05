import { writable } from 'svelte/store';
import { supabase } from '$lib/supabaseClient.js';
export const username = writable([]);



export const loadUserInfo = async (usermail) => {
	const { data, error } = await supabase.from('users').select().eq('mail', usermail )
	if (error) {
		return console.error(error);
	}
	username.set(data);
};

