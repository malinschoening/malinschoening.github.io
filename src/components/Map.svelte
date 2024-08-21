<script>

    // TODO: change to .env 

    let MAP_URL = "https://www.google.com/maps/embed/v1/place?key=AIzaSyB-RUi0H1xv9JwAOhob94FLiSXENB0CGMM&q=Sorby,Gavle+Sweden"
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<iframe
  frameborder="0"
  referrerpolicy="no-referrer-when-downgrade"
  src={MAP_URL}
  allowfullscreen>
</iframe>

<style>

    iframe {
        border-radius: var(--borderRadius);
        width: 100%;
        height: 100%;
    }

</style>