<template>
<body>
  <div id="app">
    <div class="header">
      <img class="logo" src="./assets/logo-app.svg" alt="app logo">

      <div class="menu">
        <a href="" target="">
        <h1>Productos</h1>
        </a>

        <a href="" target="">
          <h1>Iniciar Sesion</h1>
          </a>
          </div>
      </div>

      <div class="main-component">
        <router-view></router-view>
        </div>

        <div class="footer">
          <h1>WinNow</h1>
          </div>
  </div>
</body>
</template>

<script>


export default {
  name: 'App',
}
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
    
    body {
        font-family: 'Lato', sans-serif;
    }
    
    #app{
      background-image: url(assets\ecommerce-background.svg);
    
      height: 100vh; 
      z-index: 1;
    }

    .header{
      display: flex; 
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      height: 20%;
      /*background-color: var(--red-color);*/
      padding-left: 3%;
      padding-right: 3%;
    }

    .header img{
      width: 100px;
      height: auto;
    }

    .menu {
      display: flex; 
      flex-wrap:wrap;
    }
    a{
      text-decoration: none;
    }
    .menu h1{
      color: var(--red-color);
      padding: 20px;
    }
    .main-component{
      height: 70%;
    }
    .footer {
      width: 100%;
      height: 10%;
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
