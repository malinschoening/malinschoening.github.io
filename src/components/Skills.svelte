<script>
    import skills from '$lib/skills.js'
    import { ChevronRight } from 'lucide-svelte';
    import Page from '../routes/+page.svelte';

</script>

<div class="container mt-5">
    <div class="row g-4">
        {#each skills as skill}
            <div class="col-md-6 col-xl-4">
                <div class="card h-100 position-relative">
                    <div class="card-header d-flex align-items-center border-0">
                        <img src={skill.logo} alt={skill.name} class="logo" />
                        <span class="d-flex flex-column">
                            <h3 class="ms-4 mb-0">{skill.name}</h3>
                            <span class="ms-4"><small>{skill.type}</small></span>
                        </span>
                        {#if skill.url}
                            <small class="ms-auto mb-auto mt-2">
                                <a href={skill.url}>
                                    Go to docs 
                                    <ChevronRight />
                                </a>
                            </small>
                        {/if}
                    </div>
                    <div class="card-body d-flex flex-column">
                        <p class="mt-1">
                            {skill.description}
                        </p>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .logo {
        max-height: 50px;
        max-width: 50px;
    }

    .card {
        transition: transform .4s ease-in-out;
    }

    .card:hover {
        transform: scale(1.02);
    }
</style>