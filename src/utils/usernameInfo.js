import { supabase } from '../utils/supabaseClient.js';


export const loadUserInfo = async (id) => {
	const { data, error } = await supabase.from('usernames').select().eq( 'id', id )
	if (error) {
		return console.error(error);
	}
	return(data);
};

export const updateUserName = async (name, id) => {
	const { error } = await supabase.from('usernames').update({user: name}).eq('id', id)
	if (error) {
		return console.error(error);
	}
};



