const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Ashi Learning",
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "<h2>Learn more about Vue</h2>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNum = Math.random();
      return randomNum < 0.5 ? this.courseGoalA : this.courseGoalB;
    },
  },
});

app.mount("#user-goal");
