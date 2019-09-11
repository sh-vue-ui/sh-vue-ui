<style lang="scss">
    .sh-{
        &loding-bar{
            &__long{
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 2px;
                z-index: 9999;
                transition: all .2s ease;
                transform: translate3d(-100%,0,0);
                background: #3faaf5;
            }
            &__hea{
                display: block;
                position: absolute;
                right: 0;
                width: 100px;
                height: 100%;
                box-shadow: 0 0 10px #ffdc00, 0 0 5px #ffdc00;
                opacity: 1;
                transform: rotate(3deg) translateY(-4px);
            }
            &__err{
                background: #f53940;
            }
        }
    }
</style>
<template>
    <div class="sh-loding-bar">
        <div class="sh-loding-bar__long"
             :class="isError ? 'sh-loding-bar__err' : ''"
             role="bar"
             :style="{transform: 'translate3d(-'+(100-totalProgress)+'%, 0, 0)'}">
            <div class="sh-loding-bar__hea"></div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'ShLoadingBar',
        props: {
            type: {
                type: Number,
                default: 1
            }
        },
        data () {
            return {
                speed: 5,
                easing: 'linear',
                percentNum: 0,
                totalProgress: 0,
                showSpinner: true,
                isError: false
            }
        }
    }
</script>
