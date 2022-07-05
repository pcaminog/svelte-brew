import { writable } from 'svelte/store';
import { supabase } from '$lib/supabaseClient.js';
export const comments = writable([]);



export const loadComments = async (id) => {
	const { data, error } = await supabase.from('comments').select().eq( 'brewId', id ).order('createdAt', { ascending: true })
	if (error) {
		return console.error(error);
	}
	comments.set(data);
};

export const addComments = async (comment) => {
	const { data, error } = await supabase.from('comments').insert(comment);

	if (error) {
		return console.error(error);
	}

	comments.update((cur) => [...cur, data[0]]);
};

