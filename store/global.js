export const state = () => ({
    toggle: false,

})

export const mutations = {
    toggleModal(state) {
        state.toggle = true;
        console.log("entre =>",state.toggle)
    }
}