<script>
    import sidebar from "$lib/sidebar.js";
    import { Text } from "lucide-svelte";

</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<aside class="position-fixed p-3 h-100">
    <span class="menu-icon position-fixed">
        <Text size="50" />
    </span>
    <nav class="position-fixed mt-5 ms-5">
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
        margin-top: -250px;
        margin-left: -350px;
        transition: margin .4s ease-in-out, transform .4s ease-in-out;
        transform: rotate(25deg);
        z-index: 2000;
        width: 300px;
    }

    aside:hover {
        margin-top: -150px;
        transform: rotate(15deg);
        margin-left: -150px;
    }

    .menu-icon {
        transform: rotate(-25deg);
        margin-left: 200px;
        margin-top: 150px;
        transition: opacity .3s ease-in;
    }

    aside:hover .menu-icon {
        opacity: 0;
    }

    nav{
        padding-top: 50px;
        padding-left: 20px;
        opacity: 0;
        transform: rotate(-15deg);
        transition: opacity 1s ease-out;
    }

    aside:hover nav {
        opacity: 1;
    }

    li {
        font-size: 1.3rem;
        font-weight: 200;
    }
</style>