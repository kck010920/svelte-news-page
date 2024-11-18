/** @type {import('./$types').PageServerLoad} */
export async function load( {fetch, params} ) {
    const news = async(id) => {
		const temp = await fetch (`https://toa.edu.my/api/dailyNews/?id=${id}`)
		const resData = await temp.json();
		return resData;
        
	}

	return {
		news: await news(params.id),
	}
};