import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
    state: () => ({
        rail: false,
    }),

    actions: {
        // since we rely on `this`, we cannot use an arrow function
        switchRail() {
            this.rail = !this.rail
        },
    },

    persist: true,
})
