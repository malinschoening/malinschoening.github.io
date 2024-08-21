<script>
    import contactInfo from "$lib/contact.js";
</script>

<div class="card">
    <div class="card-header border-0">
        <h3>Contact Information</h3>
    </div>
    <div class="card-body">
        <ul class="ps-2">
            {#each contactInfo as info}
                <li class="py-2 d-flex align-items-center">
                    <svelte:component this={info.icon} class="me-2" size="30" />
                    {info.name}
                </li>
            {/each}
        </ul>
    </div>
</div>
