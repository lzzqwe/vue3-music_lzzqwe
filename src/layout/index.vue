<template>
    <div class="common-layout">
        <el-container>
            <SlideBar />
            <el-container>
                <el-header>Header</el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import SlideBar from '../layout/components/SlideBar/index.vue'
export default {
    name: 'Layout',
    components: {
        SlideBar
    }
}
</script>

<style lang="scss" scoped>
.common-layout {
    height: 100%;
    .el-container {
        height: 100%;
        .el-header {
            background-color: #b3c0d1;
            color: var(--el-text-color-primary);
            text-align: center;
            line-height: 60px;
        }
        .el-main {
            background-color: #e9eef3;
            color: var(--el-text-color-primary);
            text-align: center;
            line-height: 160px;
        }
    }
    .el-aside {
        background-color: #d3dce6;
        color: var(--el-text-color-primary);
        text-align: center;
        line-height: 200px;
    }
}
</style>