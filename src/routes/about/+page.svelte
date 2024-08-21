<script>
    import aboutContent from '$lib/about.js'
    import { onMount } from 'svelte';

    export let data;

    onMount(() => {
        console.log(data)
    })
</script>

<svelte:head>
    {#if data.meta}
        <meta name="description" content={data.meta.description} />
        <title>{data.meta.title}</title>
    {/if}
</svelte:head>
<div class="container">

</div>