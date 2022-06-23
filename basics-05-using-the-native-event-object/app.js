const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      myName: "",
      lastName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          console.log(this);
          that.counter = 0;
        }, 1000);
      }
    },
    name(newValue, oldValue) {
      console.log("newValue", newValue);
      console.log("oldValue", oldValue);

      if (!newValue) {
        this.myName = "";
      } else {
        this.myName = newValue + " " + this.lastName;
      }
    },
    lastName(value) {
      if (!value) {
        this.myName = "";
      } else {
        this.myName = this.name + " " + value;
      }
    },
  },
  computed: {
    fullName() {
      console.log("running");
      if (!this.name || !this.lastName) {
        return "";
      }
      return this.name + " " + this.lastName + " computed";
    },
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetName() {
      this.name = "";
    },
    outputFullname(lastName) {
      console.log("execute");
      if (this.name) {
        return this.name + " " + lastName;
      }
    },
  },
});

app.mount("#events");
