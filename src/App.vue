<template>
  <div id="app">
    <div class="header">
      <img class="logo" src="./assets/logo-app.svg" alt="app logo">

      <div class="menu">
        <button v-on:click="getAll" type="button" class="btn btn-outline-danger btn-header">
        Productos
        </button>

        <button v-on:click="init" v-if="is_auth" type="button" class="btn btn-outline-danger btn-header">
          Mi Informacion
        </button>

        <button v-on:click="closeSession" v-if="is_auth" type="button" class="btn btn-outline-danger btn-header">
          Cerrar Sesion
        </button>
        </div>
    </div>
    <div class="main-component">
        <router-view v-on:logeado="logIn"></router-view>
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
      //count:0
    }
  }, 
  
   methods: {

     // esto nos lleva a user_auth si no esta autenticado, en caso contrario al usuario actual
     updateAuth: function(){
      var self = this
      self.is_auth  = localStorage.getItem('isAuth') || false

      if(self.is_auth == false)
        self.$router.push({name: "customerauth"})

      else{
        let username = localStorage.getItem("current_username")
        self.$router.push({name: "customer", params:{ username: username }})
      }  
    },

     init: function(){
       //if(this.route.name!="customer"){
         let username = localStorage.getItem('current_username');
         this.$router.push({name: "customer", params:{username:username}});
       //}
     },
     getAll: function(){
       //if(this.route.name!="products"){
         //this.count++;
         //console.log(this.$router.push({name:"products"}))
         this.$router.push({name:"products"})
       //}
     }, 

     closeSession: function(){
        localStorage.removeItem('isAuth')
        localStorage.removeItem('current_username')
        this.updateAuth()
     },

     // nos lleva al metodo de update 
     logIn: function(username){
       
       localStorage.setItem('current_username',username)
       localStorage.setItem('isAuth', true)
       this.updateAuth()
     }
     
   },

   // esto sucede de inicio, llevandonos al al root, y ademas haciendo el userupdate, por lo q nos llevara a userauth
   created: function(){
     this.$router.push({name:"root"})
     this.updateAuth()
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
    .btn-header{
      margin: 20px;
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
