<script setup lang="ts">
import Arrow from '../assets/arrow.vue';
import lineArrow from '../assets/lineArrow.vue'
import arrowVue from '../assets/arrow.vue';
</script>

<template>
    <header>
        <lineArrow />
        <div>
            <span><b>Up to 70% Off.</b></span>
            <span>Shop our latest sale styles</span>
        </div>
        <lineArrow />

    </header>
    <main>

        <button>
            <Arrow />
        </button>
        <div class="data">
            <p>New collection</p>
            <div>
                <nobr>
                    <p>Menswear 2020</p>
                </nobr>
                <div> <button>Shop sale</button>
                    <button>Shop the menswear</button>
                </div>

            </div>
            <div class="variants"></div>
        </div>
        <button>
            <Arrow />
        </button>
    </main>
</template>

<style lang="scss" scoped>
header {
    font-size: 12px;
    line-height: 150%;

    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 34px;
    background: #17696A;

    >div {
        margin: 17px;
        display: flex;
        gap: 4px;

        >*:last-child {
            text-decoration-line: underline;
        }
    }

    svg {
        fill: white;
    }

    svg:first-child {
        transform: matrix(-1, 0, 0, 1, 0, 0);
    }

}

main {
    min-height: 800px;
    width: 100%;
    background: url(../assets/backend/manswear2020.png) no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
    align-items: center;

    svg {
        fill: #424551;
    }

    >button {
        border: none;
        border-radius: 50%;
        width: 48px;
        height: 48px;

    }

    .data {
        color: #1E212C;
        position: absolute;
        left: 345px;
        height: 480px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        >p {
            font-weight: 700;
            font-size: 18px;
            text-transform: uppercase;
        }

        >div {
            position: absolute;
            top: 39px;

            p {
                font-weight: 900;
                font-size: 72px;
                line-height: 130%;
            }

            >div {
                display: flex;
                gap: 24px;
                button {
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 52px;
                    padding: 0 40px;
                    border-radius: 4px;

                }

                button:not(:last-child) {
                    color: #17696A;
                    border-color: #17696A;
                    background: none;
                }

                button:last-child {
                    color: white;
                    border: #17696A;
                    background: #17696A;
                }
            }

        }
    }

    >button:first-child {
        svg {
            transform: rotate(-180deg);
        }
    }
}
</style>