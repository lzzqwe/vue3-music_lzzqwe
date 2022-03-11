<template>
    <el-aside class="slide-bar">
        <h5 class="mb-2">Default colors</h5>
        <el-menu
            :router="true"
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
        >
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>Navigator One</span>
                </template>
                <el-menu-item index="/home">首页</el-menu-item>
                <el-menu-item index="/songlist/songlist">歌单</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </el-aside>
</template>

<script>
import {
    Location
} from '@element-plus/icons-vue'
export default {
    name: "SlideBar",
    components: {
        Location,
    },
    methods: {
        handleOpen() { },
        handleClose() { },
    },
};
</script>

<style lang="scss" scoped>
.slide-bar {
    width: 200px;
    .mb-2 {
        line-height: 20px;
    }
}
</style>
