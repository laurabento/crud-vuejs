import { createLocalVue, shallowMount, RouterLinkStub } from "@vue/test-utils";
import Vuex from "vuex";
import Card from "@/components/Card.vue";
import Cards from "@/components/Cards.vue";
import NewAppointment from "@/components/NewAppointment.vue";
import Tabs from "@/components/Tabs.vue";
import store, { __createMocks as createStoreMocks } from "../test/__mocks__";

jest.mock("../store");

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Tabs.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Tabs);
  });
  test("Check if all tabs are there", () => {
    expect(wrapper.find("li").exists()).toBe(true);
  });
  test("applies active class when clicked", () => {
    const li = wrapper.find("li");
    li.trigger("click");
    expect(li.classes()).toContain("active");
  });
});

describe("NewAppointment.vue", () => {
  let storeMocks;
  let wrapper;

  beforeEach(() => {
    storeMocks = createStoreMocks();
    wrapper = shallowMount(NewAppointment, {
      store: storeMocks.store,
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });
  });
  test("It should add item", () => {
    wrapper.find("#btn-submit").trigger("submit");
    expect(storeMocks.actions.addAppointment).toBeCalled();
  });
});

describe("Cards.vue", () => {
  let storeMocks;
  let wrapper;

  beforeEach(() => {
    storeMocks = createStoreMocks();
    wrapper = shallowMount(Cards, {
      store: storeMocks.store,
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });
  });
  test("It should fetch items", () => {
    expect(storeMocks.actions.fetchAppointments).toBeCalled();
  });
});

describe("Card.vue", () => {
  let storeMocks;
  let wrapper;

  beforeEach(() => {
    storeMocks = createStoreMocks();
    wrapper = shallowMount(Card, {
      store: storeMocks.store,
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });
  });

  test("It should delete item", () => {
    wrapper.find("#btn-delete").trigger("click");
    expect(storeMocks.actions.deleteAppointment).toBeCalled();
  });
});
