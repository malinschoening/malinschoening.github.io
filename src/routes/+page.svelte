<script>
    import Hero from "$components/layout/Hero.svelte";
    import Skills from "../components/Skills.svelte";

    export let data;

</script>

<svelte:head>
    {#if data.meta}
        <meta name="description" content={data.meta.description} />
        <title>{data.meta.title}</title>
    {/if}
</svelte:head>


<Hero />
<Skills />