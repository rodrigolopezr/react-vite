export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=BL0dqGs65EQNlvQ5rbpT2m9XkPdfcIRT&q=${category}&limit=10`
    const response = await fetch(url)
    const { data } = await response.json()

    const images = data.map(image => ({
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url
    }))

    console.log(images)
    
    return images
}