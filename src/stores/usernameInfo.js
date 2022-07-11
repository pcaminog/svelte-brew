import { supabase } from '../utils/supabaseClient';
import { writable } from 'svelte/store';
export const userinfo = writable([]);

export const loadUserInfo = async (id) => {
	const { data, error } = await supabase.from('usernames').select().eq( 'id', id )
	if (error) {
		return console.error(error);
	}
	userinfo.set(data);

};

export const updateUserName = async (name, id) => {
	const { data, error } = await supabase.from('usernames').update({user: name}).eq('id', id)
	if (error) {
		return console.error(error);
	}

	userinfo.update(() => [data[0]]);

};


