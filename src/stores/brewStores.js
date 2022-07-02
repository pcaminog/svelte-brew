import { writable } from 'svelte/store';
import {supabase} from "$lib/supabaseClient.js";
export const brews = writable([]);

export const loadBrews = async () => {
    const {data, error} = await supabase.from('brews0').select();
    if(error) {
        return console.error(error);
    }
    brews.set(data);
}

export const addBrew = async (brew) => {
    const {data, error} = await supabase.from('brews0').insert(brew);
    
    if(error) {
        return console.error(error);
    }

    brews.update(cur => [...cur, data[0]]);
};

export const deleteBrew = async (id) => {
    const {error} = await supabase.from('brews0').delete().match({id});
    
    if(error) {
        return console.error(error);
    }

	brews.update((brews) => brews.filter((brew) => brew.id !== id));
};