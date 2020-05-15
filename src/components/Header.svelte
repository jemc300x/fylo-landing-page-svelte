
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
    width: 100px;
  }

  .header-navbar{
    list-style: none;
    display: inline-flex;
    font-family: var(--font-family);
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
  }

</style>

<header class="header">
  <img class="header-logo" src="/assets/img/logo.svg" alt="logo">
  <ul class="header-navbar">
    <li><a href="/">Feature</a></li>
    <li><a href="/">Team</a></li>
    <li><a href="/">Sing In</a></li>
  </ul>
</header>