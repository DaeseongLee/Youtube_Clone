class Youtube {
    constructor(instance) {
        this.youtube = instance;
    }

    async mostPopular() {
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResult: 25
            },
        });
        return response.data.items;
    }

    async search(value) {
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                maxResult: 25,
                type: 'video',
                q: value
            }
        })
        return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
    }
}

export default Youtube;