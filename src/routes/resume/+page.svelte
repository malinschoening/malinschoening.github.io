<script>
    import Education from "../../components/Education.svelte";
import Skills from "../../components/Skills.svelte";
    import WorkExperience from "../../components/WorkExperience.svelte";

    export let data;
</script>

<svelte:head>
    {#if data.meta}
        <meta name="description" content={data.meta.description} />
        <title>{data.meta.title}</title>
    {/if}
</svelte:head>

<Skills />
<Education />
<WorkExperience />