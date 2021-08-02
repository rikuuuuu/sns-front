export const strict = false

import axios from 'axios'
import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
    videoIds: [],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    videoIds: state => state.videoIds,
}

export const mutations: MutationTree<RootState> = {
    videoIds: (state, videoIds) => (state.videoIds = videoIds),
}

export const actions: ActionTree<RootState, RootState> = {

    async search({ commit, state }, { q }) {
        const baseURL: string | undefined = "https://sns-service-321409.an.r.appspot.com/" // "http://127.0.0.1:5000/"
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        try {
            const res = await axios.get(baseURL + 'youtube-search/?q=' + q, {headers});
            // commit('videoIds', res.data)
            console.log("res ", res.data)
            return res.data
        } catch(e) {
            throw new Error(e)
        } finally {

        }
    },
}