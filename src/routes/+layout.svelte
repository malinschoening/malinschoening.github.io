<script>
    import Footer from "../components/layout/Footer.svelte";
    import Sidebar from "../components/layout/Sidebar.svelte";


</script>

<Sidebar />

<main>
    <slot />
    <Footer />
</main>

<style>
    main {
        margin-left: 70px;
    }

    @media(min-width: 1200px){
        main {
            margin-left: 250px;
        }
    }
</style>