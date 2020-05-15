<script>
  export let content;
  export let avatar;
  export let userName;
  export let userDetails;
</script>

<style>
  .card{
    max-width: 300px;
    width: 70%;
    border-radius: 5px;
    box-shadow: 0px 0px 25px -12px var(--Light-Gray);
    margin: 0 auto;
    padding: 15px;
    background-color: white;
  }

  .card-head {
    text-align: start;
  }

  .card-body p {
    padding: 10px 0px;
    margin: 0px;
    font-size: 0.8rem;
    line-height: 25px;
  }

  .card-footer {
    display: flex;
    align-items: center;
  }

  .card-footer img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  .card-footer-profile {
    margin: 0;
    padding: 0;
    text-align: start;
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    .card {
      margin: 0;
    }
  }
</style>

<div class="card">
  <div class="card-head">
    <img src='/assets/img/icon-quotes.svg' alt="Quotes" />
  </div>
  <div class="card-body">
    <p>{content}</p>
  </div>
  <div class="card-footer">
    <img src={avatar} alt={userName} />
    <div>
      <h4 class="card-footer-profile">{userName}</h4>
      <p class="card-footer-profile">{userDetails}</p>
    </div>
  </div>
</div>