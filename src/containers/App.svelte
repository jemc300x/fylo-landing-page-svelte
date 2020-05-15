<script>
  import Header from '../components/Header.svelte';
  import Section from '../components/Section.svelte';
</script>

<style>
  :global(:root){
    --font-family: 'Raleway', sans-serif;
    --desktop-width: 1440px;
    --mobile-width: 375px;
    /* Color Primary */
    --Very-Dark-Blue: hsl(243, 87%, 12%);
    --Desaturated-Blue: hsl(238, 22%, 44%);
    /* Color Accent */
    --Bright-Blue: hsl(224, 93%, 58%);
    --Moderate-Cyan: hsl(170, 45%, 43%);
    /* Color Neutral */
    --Light-Grayish-Blue: #f8f8fe;
    --Light-Gray: hsl(0, 0%, 75%);
  }

  :global(body){
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    margin: 0 auto;
    color: var(--Very-Dark-Blue);
    margin: 0;
    padding: 0;
  }

  h1 {
    margin-bottom: 25px;
    font-size: 1.7rem;
  }

  h2 {
    margin-bottom: 25px;
    font-size: 1.2rem;
  }

  p {
    margin-bottom: 25px;
    padding: 0 2%;
  }

  input {
    width: 75%;
    border-radius: 3px;
    padding: 10px;
    border: 1px solid var(--Very-Dark-Blue);
    font-family: var(--font-family);
    color: var(--Light-Gray);
    margin-bottom: 10px;
  }

  button {
    width: 80%;
    background-color: var(--Bright-Blue);
    padding: 10px;
    color: var(--Light-Grayish-Blue);
    border: none;
    border-radius: 3px;
    box-shadow: 2px 2px 5px 0px var(--Light-Gray);
    font-family: var(--font-family);
    font-weight: bold;
  }

  .section-details-call-to-action {
    padding-top: 20px;
    padding-bottom: 50px;
  }

  a {
    color: var(--Moderate-Cyan);
    text-decoration: none;
    border-bottom: 1px solid;
    padding: 5px;
    margin: 20px 0 20px 0;
  }

  @media (min-width: 768px){
    h1 {
      font-size: 2.5rem;
      font-family: var(--font-family);
    }

    p {
      padding: 0;
    }

    input {
      width: 55%;
      margin-right: 10px;
    }

    button {
      width: 30%;
    }
  }


</style>

<Header></Header>
<Section 
  imgUrl='/assets/img/illustration-1.svg'
  imgTextAlt='Illustration 2'
>
  <h1>All your files in one secure location, accessible anywhere.</h1>
  <p>Fylo stores your most important files in one secure location. Access them wherever your need, shere and collaborate with friends, family, and co-workers.</p>
  <form>
    <input type="text" name="email" id="email" placeholder="Enter your email..." />
    <button>Get Started</button>
  </form>
</Section>