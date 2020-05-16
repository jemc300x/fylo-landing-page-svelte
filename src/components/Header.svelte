<script>
  import { link } from 'svelte-spa-router';
</script>

<style>
  .header{
    max-width: var(--desktop-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    margin: 0px auto;
    padding: 0 5%;
  }

  .header-logo{
    width: 90px;
  }

  .header-navbar{
    list-style: none;
    display: inline-flex;
    font-family: var(--font-family);
    padding: 0;
  }

  .header-navbar li {
    margin-right: 10px;
  }

  .header-navbar a {
    text-decoration: none;
  }

  @media (min-width: 768px){
    .header-navbar li {
      margin-right: 25px;
    }

    .header-logo{
      width: initial;
    }  
  }

</style>

<header class="header">
  <a href="/" use:link>
    <img class="header-logo" src="/assets/img/logo.svg" alt="logo">
  </a>
  <ul class="header-navbar">
    <li><a href="/features" use:link>Features</a></li>
    <li><a href="/team" use:link>Team</a></li>
    <li><a href="/about" use:link>Sign In</a></li>
  </ul>
</header>