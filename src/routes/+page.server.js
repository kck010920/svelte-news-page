/* @type {import('./$types').PageServerLoad} */
export async function load() {
    const getNews = async() => {
		const temp = await fetch (`https://toa.edu.my/api/dailyNews/`)
		const resData = await temp.json();

		return resData;
	}

    const getHighlighted = async() => {
		const temp = await fetch (`https://toa.edu.my/api/dailyNews/?type=highlight`)
		const resData = await temp.json();

		return resData;
	}
	return {
		allNews: await getNews(),
        highlightedNews: await getHighlighted()
	}
};
