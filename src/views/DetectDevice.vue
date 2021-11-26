<template>
    <div class="main">
        <h1>Info device</h1>
        <h2>Width: {{ width }}</h2>
        <dl>
            <dt>Browser</dt>
            <dd>Name:{{ deviceInfo.browserName }}</dd>
            <dd>Version: {{ deviceInfo.version }}</dd>
        </dl>
        <dl>
            <dt>OS</dt>
            <dd>Name:{{ deviceInfo.osName }}</dd>
            <dd>Version:</dd>
        </dl>
        <dl>
            <dt>Device</dt>
            <dd>Vendor:</dd>
            <dd>Model: {{ deviceInfo.phone }}</dd>
            <dd>
                Type:
                {{ !!deviceInfo.type ? deviceInfo.type : "Desktop" }}
            </dd>
        </dl>
    </div>
</template>
<script>
import { ref, onMounted } from "@vue/runtime-core";

import MobileDetect from "mobile-detect";

export default {
    setup() {
        const deviceInfo = ref("");
        const width = ref("");

        async function handleResize() {
            let md = new MobileDetect(
                window && window.navigator && window.navigator.userAgent
            );
            deviceInfo.value = {
                browserName: md.userAgent(),
                version: md.version(),
                osName: md.os(),
                phone: md.phone(),
                type: md.mobile(),
            };

            width.value = window.innerWidth;
        }
        onMounted(() => {
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        });

        return { deviceInfo, width };
    },
};
</script>
<style scoped>
.main {
    width: 200px;
}
</style>
