import axios from "axios";

const state = () => ({
  appointments: [],
});

const getters = {
  allAppointments: (state) => state.appointments,
};

const actions = {
  async fetchAppointments({ commit }) {
    const res = await axios.get("http://localhost:5000/appointment");
    commit("setAppointments", res.data);
  },
  async deleteAppointment({ commit }, id) {
    await axios.delete(`http://localhost:5000/appointment/${id}`);
    commit("removeAppointments", id);
  },
  async addAppointment({ commit }, form) {
    const res = await axios.post("http://localhost:5000/appointment", form);

    commit("newAppointment", res.data);
  },
  async updateAppointment({ commit }, updText) {
    const res = await axios.put(
      `http://localhost:5000/appointment/${updText.id}`,
      updText
    );
    commit("updateAppointment", res.data);
  }
};

const mutations = {
  setAppointments: (state, appointments) => (state.appointments = appointments),
  removeAppointments: (state, id) =>
    (state.appointments = state.appointments.filter(
      (appointments) => appointments.id !== id
    )),
  newAppointment: (state, appointment) =>
    state.appointments.unshift(appointment),
  updateAppointment: (state, updText) => {
    const index = state.appointments.findIndex(
      (appointment) => appointment.id === updText.id
    );
    if (index !== -1) {
      state.appointments.splice(index, 1, updText);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
