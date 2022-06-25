const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
      obj: {
        name: "ashi",
        email: "sdjfkl6@gmail.com",
        address: "fjasdlkfj TW",
      },
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = "";
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
