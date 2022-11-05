export const state = () => ({
  id: "",
  code: "",
  value: "",
  discountType: "",
  status: "wait",
  statusText: "",
})

export const getters = {
  coupon: state => state
}

export const mutations = {
  updateCode(state, value) {
    state.code = value
    state.status = "wait"
  },
  setId(state, value) {
    state.id = value
  },
  setValue(state, value) {
    state.value = value
  },
  setDiscountType(state, value) {
    state.discountType = value
  },
  setStatus(state, value) {
    state.status = value
  },
  setStatusText(state, value) {
    state.statusText = value
  }
}

export const actions = {
  async verifyCoupon({ commit, getters }) {
    if (getters.coupon.code == "") { return } // если строка coupon пустая, то прервать выполнение текущей функции
    // Тело функции
    const response = await this.$axios.$get(`/coupon/verify?coupon=${getters.coupon.code}`)
    console.log(response);
    if (response.status == "OK") {
      commit('setId', response.content.id)
      commit('setValue', response.content.value)
      commit('setDiscountType', response.content.discount_type)
    }
    commit('setStatus', response.status)
    commit('setStatusText', response.statusText)
    // console.log(response)
  }
}
