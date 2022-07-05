import { writable } from 'svelte/store';
import { supabase } from '$lib/supabaseClient.js';
export const username = writable([]);


export const loadUserInfo = async (email) => {
	const { data, error } = await supabase.from('users').select().eq('mail', email )
	if (error) {
		return console.error(error);
	}
	username.set(data);
};

