<template>
    <footer>
        <p>Copyright &copy; 2022</p>
        <router-link to="/about">About</router-link>
    </footer>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Footer',
}
</script>

<style>
a {
    color: #333;
}

footer {
    margin-top: 30px;
    text-align: center;
}
</style>