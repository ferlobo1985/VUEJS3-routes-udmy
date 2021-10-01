<template>
  <app-header></app-header>
        <div class="container">
          <router-view></router-view>
          <hr/> 
          <router-view name="notify"></router-view>
        </div>  
    <app-footer></app-footer>
</template>

<script>
  export default{
  
  }
</script>
