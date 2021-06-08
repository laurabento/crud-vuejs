import {
  createLocalVue,
  shallowMount,
  mount,
  RouterLinkStub,
} from "@vue/test-utils";
import Vuex from "vuex";
import VueMeta from "vue-meta";
import { __createMocks as createStoreMocks } from "../test/__mocks__";
import Appointment from "@/pages/appointment/_id.vue";
import VueRouter from "vue-router";

jest.mock("../store");
jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: [{ val: 1 }] }),
}));

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: "head" });
localVue.use(Vuex);
localVue.use(VueRouter);

const routes = [
  {
    path: "/",
  },
];
const router = new VueRouter({
  routes,
});

describe("Appointment.vue", () => {
  let storeMocks;
  let wrapper;

  beforeEach(() => {
    storeMocks = createStoreMocks();
    wrapper = shallowMount(Appointment, {
      store: storeMocks.store,
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      router,
    });
  });
  afterEach(() => {
    if (wrapper) {
      wrapper.destroy();
    }
  });
  test("Has a head content", () => {
    expect(wrapper.vm.$metaInfo.title).toBe(
      "Details | " + storeMocks.state.title
    );
  });
  test("Testing router", () => {
    expect(wrapper.vm.$route).toBeInstanceOf(Object);
  });
  test("Get axios", () => {
    expect(wrapper.vm.appointment.length).toBe(1);
  });
});
