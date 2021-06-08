import { createLocalVue, shallowMount, RouterLinkStub } from "@vue/test-utils";
import VueMeta from "vue-meta";
import About from "@/pages/about.vue";
import Index from "@/pages/index.vue";

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: "head" });

describe("About.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(About, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });
  });
  afterEach(() => {
    if (wrapper) {
      wrapper.destroy();
    }
  });
  test("Has a head content", () => {
    expect(wrapper.vm.$metaInfo.title).toBe("About");
  });
});

describe("Index.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Index, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });
  });
  afterEach(() => {
    if (wrapper) {
      wrapper.destroy();
    }
  });
  test("Has a head content", () => {
    expect(wrapper.vm.$metaInfo.title).toBe("Agenda");
  });
});
