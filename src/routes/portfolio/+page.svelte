<script>
    import Portfolio from "../../components/Portfolio.svelte";

    export let data;
</script>

<svelte:head>
    {#if data.meta}
        <meta name="description" content={data.meta.description} />
        <title>{data.meta.title}</title>
    {/if}
</svelte:head>

<Portfolio />