<template>
  <app-header></app-header>
        <div class="container">
          <!-- <home-component></home-component> -->
          <!-- <articles-main></articles-main> -->
          <!-- <article-comp></article-comp> -->
          <contact-component></contact-component>
        </div>
    <app-footer></app-footer>
</template>

<script>
  // import HomeComponent from './components/index';
  // import ArticlesMain from './components/Articles'
  // import ArticleComp from './components/Articles/article'
  import ContactComponent from './components/Contact'

  export default{
    components:{
      // HomeComponent
      // ArticlesMain
      // ArticleComp
      ContactComponent
    }
  }
</script>
