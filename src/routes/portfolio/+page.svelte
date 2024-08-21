<script>
    export let data;
</script>

<svelte:head>
    {#if data.meta}
        <meta name="description" content={data.meta.description} />
        <title>{data.meta.title}</title>
    {/if}
</svelte:head>