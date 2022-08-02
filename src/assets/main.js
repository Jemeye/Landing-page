const content = null || document.getElementById('content');

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=50'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f53621c7f3mshd46d568a54d9ca5p1fb359jsnf1fe3c312021',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

// https://i.ytimg.com/vi/FHjlsVzHPOI/hqdefault.jpg
async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async ()=>{
    try{
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video=>`
            <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
                </h3>
            </div>
            </div>
        `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } catch (error){
        console.log(error)
    }
})();