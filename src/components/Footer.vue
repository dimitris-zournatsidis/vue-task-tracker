<template>
    <footer>
        <p>Copyright &copy; {{ getCurrentYear() }}</p>
        <router-link v-show="isAboutPage" to="/about">About</router-link>
    </footer>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Footer',
    methods: {
        getCurrentYear() {
            return new Date().getFullYear();
        }
    },
    computed: {
        isAboutPage() {
            if (this.$route.path === '/about') {
                return false;
            } else {
                return true;
            }
        }
    }
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