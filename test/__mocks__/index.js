import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const getters = {
  allAppointments: jest.fn().mockReturnValue([
    {
      id: "1",
      title: "Doctor",
      date: "2021-04-19",
      hour: "12:00",
      description:
        "Doctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors Appointment",
      local: "São Paulo - SP",
      tag: "School",
      color: "pink",
      checked: false,
    },
    {
      id: "2",
      title: "Meeting with Girls",
      date: "2021-04-29",
      hour: "14:00",
      description:
        "Doctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors Appointment",
      local: "São Paulo - SP",
      tag: "Personal",
      color: "purple",
      checked: true,
    },
    {
      id: "3",
      title: "Food Shopping",
      date: "2021-04-23",
      hour: "12:00",
      description:
        "Doctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors Appointment",
      local: "São Paulo - SP",
      tag: "House",
      color: "green",
      checked: false,
    },
    {
      id: "4",
      title: "Cooking Night",
      date: "2021-04-19",
      hour: "12:00",
      description:
        "Doctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors Appointment",
      local: "São Paulo - SP",
      tag: "Food",
      color: "blue",
      checked: true,
    },
    {
      id: "5",
      title: "Study English with Marta",
      date: "2021-04-19",
      hour: "12:00",
      description:
        "Doctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors Appointment",
      local: "Marta's house",
      tag: "Study",
      color: "yellow",
      checked: false,
    },
  ]),
};

export const mutations = {
  setAppointments: jest.fn(),
  removeAppointments: jest.fn(),
  newAppointment: jest.fn(),
  updateAppointment: jest.fn(),
};

export const actions = {
  fetchAppointments: jest.fn(),
  deleteAppointment: jest.fn(),
  addAppointment: jest.fn(),
  updateAppointment: jest.fn(),
};

export const state = {
  appointments: [
    {
      id: "1",
      title: "Doctor",
      date: "2021-04-19",
      hour: "12:00",
      description:
        "Doctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors Appointment",
      local: "São Paulo - SP",
      tag: "School",
      color: "pink",
      checked: false,
    },
    {
      id: "2",
      title: "Meeting with Girls",
      date: "2021-04-29",
      hour: "14:00",
      description:
        "Doctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors Appointment",
      local: "São Paulo - SP",
      tag: "Personal",
      color: "purple",
      checked: true,
    },
    {
      id: "3",
      title: "Food Shopping",
      date: "2021-04-23",
      hour: "12:00",
      description:
        "Doctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors Appointment",
      local: "São Paulo - SP",
      tag: "House",
      color: "green",
      checked: false,
    },
    {
      id: "4",
      title: "Cooking Night",
      date: "2021-04-19",
      hour: "12:00",
      description:
        "Doctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors Appointment",
      local: "São Paulo - SP",
      tag: "Food",
      color: "blue",
      checked: true,
    },
    {
      id: "5",
      title: "Study English with Marta",
      date: "2021-04-19",
      hour: "12:00",
      description:
        "Doctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors AppointmentDoctors Appointment",
      local: "Marta's house",
      tag: "Study",
      color: "yellow",
      checked: false,
    },
  ],
};

export function __createMocks(
  custom = { getters: {}, mutations: {}, actions: {}, state: {} }
) {
  const mockGetters = Object.assign({}, getters, custom.getters);
  const mockMutations = Object.assign({}, mutations, custom.mutations);
  const mockActions = Object.assign({}, actions, custom.actions);
  const mockState = Object.assign({}, state, custom.state);

  return {
    getters: mockGetters,
    mutations: mockMutations,
    actions: mockActions,
    state: mockState,
    store: new Vuex.Store({
      getters: mockGetters,
      mutations: mockMutations,
      actions: mockActions,
      state: mockState,
    }),
  };
}

export const store = __createMocks().store;
