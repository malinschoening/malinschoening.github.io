<script>
    import sidebar from "$lib/sidebar.js";

</script>

<aside class="position-fixed p-3 h-100">
    <nav>
        <ul class="p-2">
            {#each sidebar as menuItem}
                <li class="py-3">
                    <a class="py-1 d-flex align-items-center" href={menuItem.url}>
                    <svelte:component this={menuItem.icon} class="me-2" size="30" />
                    {menuItem.name}</a>
                </li>
            {/each}
        </ul>
    </nav>
</aside>

<style>
    aside {
        background: var(--sidebarBackground);
        color: var(--sidebarText);
        width: 70px;
    }


    li {
        font-size: 1.3rem;
        font-weight: 200;
    }

    @media(min-width: 1200px){
        aside {
            width: 250px;
        }
    }
</style>