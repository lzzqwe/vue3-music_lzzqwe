<template>
    <div class="home">
        <span>{{ count }}</span>
        <button @click="_increase">增加</button>
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <el-button>中文</el-button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'NotFound',
    computed: {
        ...mapState(['count'])
    },
    methods: {
        _increase() {
            this.increase()
        },
        ...mapActions(['increase'])
    }
}
</script>

<style lang="scss" scoped>
.home {
    font-size: 50px;
    font-weight: 600;
    color: red;
}
</style>