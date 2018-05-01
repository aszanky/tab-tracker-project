import Api from '@/services/Api';

export default {
    // 'songs' is a path parameter in API --> see in routes server'
    index () {
        return Api().get('songs');
    },
    post (song) {
        return Api().post('songs', song);
    }
};