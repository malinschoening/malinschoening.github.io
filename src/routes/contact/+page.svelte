<script>
    import Map from "$components/Map.svelte";
    import ContactInfo from "$components/ContactInfo.svelte";

    export let data;
</script>

<svelte:head>
    {#if data.meta}
        <meta name="description" content={data.meta.description} />
        <title>{data.meta.title}</title>
    {/if}
</svelte:head>

<div class="container mt-5">
    <div class="row">
        <div class="col-md-7 my-auto">
            <ContactInfo />
        </div>
        <div class="col-md-4 offset-md-1 my-5">
            <Map /> 
        </div>
    </div>
</div>

<style>
    .row {
        min-height: 500px;
    }
</style>