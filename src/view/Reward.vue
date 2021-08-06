<template>
  <div class="container my-3">
    <h1 class="display-4">Reward</h1>
    <table class="table my-3">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Desc</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reward in data" :key="reward.id">
          <td>{{reward.name}}</td>
          <td>{{reward.price}}</td>
          <td>{{reward.desc}}</td>
          <td>
              <button class = "btn btn-success">
                  แลก
              </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods:{

  },
  created(){
    axios.get("http://localhost:1337/water-rewards").then((res) => {
      this.data = res.data
      console.log(this.data);
    })
  },
  data(){
    return {
      data:[]
    };
  }

}
</script>

<style>
</style>