import Api from '@/services/Api';

export default {
    // 'songs' is a path parameter in API --> see in routes server'
    index () {
        return Api().get('songs');
    },
    show (id) {
        return Api().get(`songs/${id}`);
    },
    post (song) {
        return Api().post('songs', song);
    },
    put (song) {
        return Api().put(`songs/${song.id}`, song);
    }
};
