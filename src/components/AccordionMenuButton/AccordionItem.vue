<template>
    <li class="item-container flex items-center h-[45px] max-h-0 opacity-0 overflow-hidden" @click="callActionEvent()">
        <div class="vertical-line block w-[3px] bg-gray-200 dark:bg-gray-500 ml-3"
            :class="isLastElement ? 'h-[calc(50%+1.5px)] mb-auto' : 'h-[100%]'">
        </div>
        <div class="horizontal-line block min-w-[16px] h-[3px] bg-gray-200 dark:bg-gray-500"></div>
        <div
            class="accordion-item w-full h-[40px] text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white text-base p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 hover:cursor-pointer pointer-events-auto overflow-hidden truncate">
            {{ title }}</div>
    </li>
</template>
<script lang="ts">
export default {
    name: 'AccordionItem',
    data() {
        return {
            isOpenWatcher: false
        }
    },
    props: {
        title: {
            type: String,
            required: true
        },
        actionEvent: {
            type: Function,
            required: true
        },
        isOpen: {
            type: Boolean,
            required: true
        },
        isLastElement: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    watch: {
        isOpen: function (val) {
            this.isOpenWatcher = val;

            this.toggleItemContainer(val);

        }
    },
    methods: {
        callActionEvent() {
            this.actionEvent();
        },
        toggleItemContainer(val: boolean) {

            const item_elements = document.getElementsByClassName('item-container');
            const vertical_lines = document.getElementsByClassName('vertical-line');

            if (val) {
                // False to true -> First height then opacity

                for (const item_element of item_elements) {
                    item_element.classList.toggle('max-h-0');
                }



                for (const item_element of item_elements) {
                    item_element.classList.toggle('opacity-0');
                    item_element.classList.toggle('opacity-100');
                }

                for (const vertical_line of vertical_lines) {
                    vertical_line.classList.toggle('ml-3');
                    vertical_line.classList.toggle('ml-5');
                }


            } else {
                // True to false -> first opacity then height

                for (const item_element of item_elements) {
                    item_element.classList.toggle('opacity-0');
                    item_element.classList.toggle('opacity-100');
                }

                for (const vertical_line of vertical_lines) {
                    vertical_line.classList.toggle('ml-3');
                    vertical_line.classList.toggle('ml-5');
                }

                setTimeout(() => {


                    for (const item_element of item_elements) {
                        item_element.classList.toggle('max-h-0');
                    }

                }, 250);
            }

        }
    }

}
</script>
<style scoped>
.item-container,
.vertical-line,
.horizontal-line,
.accordion-item {
    transition: all 0.25s ease-in-out;
}
</style>