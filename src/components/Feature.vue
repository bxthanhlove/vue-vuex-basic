<template>
    <div>
        <h2>Component feature</h2>
        <p class="p-welcome">
            Welcome to component {{data}}
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            data: 'Đỗ Thanh'
        }
    }
}
</script>

<style scoped>
    .p-welcome {
        font-size: 16px;
        font-weight: 700;
        box-shadow: 1px;
    }
</style>


