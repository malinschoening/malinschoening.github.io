<script>
    import me from "$lib/images/me.jpg";
</script>

<div class="container py-3">
    <div class="row">
        <div class="col-md-7 d-flex flex-column justify-content-center">
            <h1>
                Lorem, ipsum dolor.
            </h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officiis odio, atque illo incidunt, quod optio nulla architecto explicabo ducimus, repellendus corrupti. Ullam rerum cum, animi distinctio ipsa magni totam!
            </p>
        </div>
        <div class="col-md-4 offset-md-1">
            <div class="me-image position-relative">
                <div class="bubble-one position-absolute rounded-circle" />
                <div class="bubble-two position-absolute rounded-circle" />
                <img src={me} alt="Me" class="position-relative rounded-circle" />
            </div>
        </div>
    </div>
</div>

<style>
    .bubble-one {
        background: var(--bubbleOne);
        height: 500px;
        width: 500px;
        top: 0;
        right: 0;
    }
    .bubble-two {
        background: var(--bubbleTwo);
        height: 350px;
        width: 350px;
        top: 50px;
        left: 100px;
    }
    img {
        height: 50px;
        width: 50px;
        top: 100px;

    }

    @media (min-width: 992px) {
        img {
            height: 300px;
            width: 300px;
        }

        h1, p{
            margin: 0 100px;
        }

        .me-image {
            height: 500px;
        }
    }
</style>
