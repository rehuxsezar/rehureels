async function downloadReel() {
    const reelUrl = document.getElementById('reelUrl').value;
    const resultDiv = document.getElementById('result');

    // Check if URL is provided
    if (!reelUrl) {
        alert('Please enter a valid Instagram Reel URL!');
        return;
    }

    try {
        const response = await fetch(`https://instagram-reels-downloader2.p.rapidapi.com/?url=${encodeURIComponent(reelUrl)}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'instagram-reels-downloader2.p.rapidapi.com',
                'X-RapidAPI-Key': 'ec6fff2497mshba431579fb63b98p1543f0jsn14a0d41ae261' // Replace this with your API key!
            }
        });

        const data = await response.json();

        // If reel is fetched successfully
        if (data && data.download_url) {
            resultDiv.innerHTML = `
                <p>✅ Reel fetched successfully!</p>
                <a href="${data.download_url}" download="reel.mp4" target="_blank">
                    <button style="background:#4285F4">Download Reel</button>
                </a>`;
        } else {
            resultDiv.innerHTML = "⚠️ Failed to fetch the reel. Please try another URL.";
        }

    } catch (error) {
        console.error('Error fetching the reel:', error);
        resultDiv.innerHTML = "❌ Error downloading the reel. Please check the URL or API key!";
    }
}
