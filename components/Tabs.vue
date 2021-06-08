<template>
  <div class="tabs">
    <ul>
      <li
        v-for="item in tabsList"
        :key="item.id"
        :class="isActiveTab(item.id) ? 'active' : ''"
        @click="setActiveTab(item.id)"
      >
        {{ item.label }}
      </li>
    </ul>

    <div class="tabs-container">
      <transition name="slide-fade" mode="out-in">
        <div v-if="activeTab === 'agenda'" key="agenda">
          <!-- <Search /> -->
          <Cards />
        </div>
        <div v-if="activeTab === 'new'" key="new">
          <NewAppointment />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Cards from "./Cards.vue";
import NewAppointment from "./NewAppointment.vue";

export default {
  name: "Tabs",
  components: {
    Cards,
    NewAppointment
  },
  data() {
    return {
      activeTab: "",
      tabsList: [
        { id: "agenda", label: "Agenda"},
        { id: "new", label: "New Appointment"}
      ]
    };
  },
  created() {
    this.activeTab = this.tabsList[0].id;
  },
  methods: {
    isActiveTab(id) {
      return this.activeTab === id;
    },
    setActiveTab(id) {
      this.activeTab = id;
    }
  }
};
</script>

<style scoped>
.tabs {
  width: auto;
  margin: 60px;
}

.tabs ul {
  display: flex;
  list-style: none;
  width: fit-content;
  padding: 0 20px;
  height: 45px;
  margin: auto;
}

.tabs ul li {
  margin: 0 15px;
  font-size: 16px;
  font-weight: 600;
  color: #9ca3af;
  padding: 0 10px;
  height: 44px;
  cursor: pointer;
}

.tabs ul li.active {
  color: #312e81;
  border-bottom: 3px solid #312e81;
  animation: show 0.7s ease-in-out;
}

@keyframes show {
  from {
    border-color: transparent;
  }
  to {
    border-color: #312e81;
  }
}

.tabs-container {
  box-sizing: border-box;
  max-width: auto;
}

.slide-fade-enter-active {
  transition: all 0.5s;
}

.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

@media (max-width: 500px) {
  .tabs {
    margin: 40px 20px;
  }
  .tabs ul {
    text-align: center;
    padding: 0px;
  }
  .tabs ul li {
    padding: 0 8px;
    font-size: 14px;
  }
}
</style>
