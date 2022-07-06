import { supabase } from '../utils/supabaseClient.js';


export const loadUserInfo = async (id) => {
	const { data, error } = await supabase.from('usernames').select().eq( 'id', id )
	if (error) {
		return console.error(error);
	}
	return(data);
};

