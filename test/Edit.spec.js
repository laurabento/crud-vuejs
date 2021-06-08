import { createLocalVue, shallowMount, RouterLinkStub } from "@vue/test-utils";
import Vuex from "vuex";
import VueMeta from "vue-meta";
import { __createMocks as createStoreMocks } from "../test/__mocks__";
import Edit from "@/pages/appointment/edit/_id.vue";
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

describe("Edit.vue", () => {
  let storeMocks;
  let wrapper;
  beforeEach(() => {
    storeMocks = createStoreMocks();
    wrapper = shallowMount(Edit, {
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
  test("It should add item", () => {
    wrapper.find("#btn-edit").trigger("submit");
    expect(storeMocks.actions.updateAppointment).toBeCalled();
  });
  test("Has a head content", () => {
    expect(wrapper.vm.$metaInfo.title).toBe("Edit | " + storeMocks.state.title);
  });
  test("Testing router", () => {
    expect(wrapper.vm.$route).toBeInstanceOf(Object);
  });
  test("Get axios", () => {
    expect(wrapper.vm.appointment.length).toBe(1);
  });
});
