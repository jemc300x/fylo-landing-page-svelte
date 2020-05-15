<script>
  export let imgUrl = '';
  export let imgTextAlt = '';
</script>

<style>
  .section{
    display: flex;
    flex-direction: column;
    padding: 0px 5%;
    padding-bottom: 90px;
  }

  .section-illustration {
    align-self: center;
    margin-bottom: 40px;
  }

  .section-illustration img {
    width: 100%;
  }

  .section-details {
    text-align: center;
  }

  @media (min-width: 768px){
    .section {
      flex-direction: row-reverse;
      max-width: var(--desktop-width);
      margin: 0px auto;
      padding-bottom: 100px;
      align-items: center;
    }

    .section-details {
      flex: 50%;
      text-align: start;
    }

    .section-illustration {
      flex: 50%;
    }  

  }
</style>

<section class='section'>
  <div class='section-illustration'>
    <img src={imgUrl} alt={imgTextAlt}/>
  </div>
  <div class='section-details'>
    <slot></slot>
  </div>
</section>