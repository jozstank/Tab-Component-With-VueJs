const TabContainer = {
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    tabStatus: {
      type: Number,
      required: true,
    },
  },
  emits: ["changeTabStatus"],
  template: `
      <div class="tab-container">
        <ul class="tab-titles">
            <li 
            v-for="(tab,index) in tabs" 
            :key="index" 
            :class="{active:tabStatus===index}"
            @click="$emit('changeTabStatus',index)">
             {{tab.title}}
            </li>
        </ul>
        <div class="tab-content">
          <slot :name="tabs[tabStatus].name"></slot>
        </div>
      </div>
    `,
};
export default TabContainer;
