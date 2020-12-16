<template>
  <div id="app">
    <div class="header">
      <img class="logo" src="./assets/logo-app.svg" alt="app logo">

      <div class="menu">
        <a v-on:click="getAll">
        <h1>Productos{{count}}</h1>
        </a>

        <a v-on:click="init" v-if="is_auth">
          <h1>Mi informacion</h1>
          </a>
        </div>
    </div>

    <div class="main-component">
        <router-view></router-view>
    </div>

    <div class="footer">
      <h1>WishNow</h1>
    </div>

  </div>
</template>

<script>


export default {
  name: 'App',
  components: {}, 
  data: function(){
    return {
      is_auth: localStorage.getItem('isAuth') || false,
      count:0
    }
  }, 
  
   methods: {
     
     init: function(){
       if(this.route.name!="customer"){
         let username = localStorage.getItem('current_username')
         this.$router.push({name: "customer", params:{username:username}})
       }
     },
     getAll: function(){
       this.count++;
       if(this.route.name!="products"){
         console.log(this.$router.push({name:"products"}))
         this.$router.push({name:"products"})
       }
     }
     
   },
   beforeCreate: function(){
     localStorage.setItem("current_username", "nico")
     localStorage.setItem('isAuth', true)

     this.$router.push({name:"customer",params:{username:'nico'}})
     //this.$router.push({name:"products"})
     }
};
  

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
   html {
        box-sizing: border-box;
    }
    
    *,
    *:before,
    *:after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    
     :root {
        --white-color: #FFFFFF;
        --black-color: #000000;
        --red-color: #FF0000;
    }
    
    body {margin: 0 0 0 0;
        font-family: 'Lato', sans-serif;
        background-image: url(assets\ecommerce-background.svg);
    }
    
  

    .header{
      display: flex; 
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      height: 20vh;
      /*background-color: var(--red-color);*/
      padding-left: 3%;
      padding-right: 3%;
    }

    .header img{
      width: 100px;
      height: auto;
    }

    .header .menu {
      display: flex; 
      flex-wrap:wrap;
    }
    .header .menu a{
      text-decoration: none;
    }
    .header .menu a h1{
      color: var(--red-color);
      padding: 20px;
    }
    .main-component{
      height: 70vh;
      margin: 0%;
      padding: 0%;
    }
    .footer {
      width: 100%;
      height: 10vh;
      background-color: var(--red-color);
      display: flex; 
      justify-content: center;
      align-items: center;
    }
    .footer h1{
      font-weight: lighter;
      color: var(--white-color);
      letter-spacing: 2em;
    }
</style>
