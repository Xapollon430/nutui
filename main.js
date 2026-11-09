import {createApp,h,ref} from 'vue'
import {Menu as DropdownMenu, MenuItem as DropdownItem} from '@nutui/nutui'
import '@nutui/nutui/dist/style.css'
const options=['Apple','Orange','Pear'].map(value=>({text:value,value}))
createApp({setup(){const disabled=ref(false),value=ref('Apple'),events=ref(0)
return ()=>h('main',{style:'font:18px system-ui;margin:28px auto;width:min(640px,95%)'},[
h('h1','NutUI Menu'),
h('button',{id:'schedule',onClick:()=>setTimeout(()=>disabled.value=true,1800)},'Disable in 2 seconds'),
h('p',['Disabled: ',h('strong',{id:'disabled'},String(disabled.value)),' · Value: ',h('strong',{id:'value'},value.value),' · Selection events: ',h('strong',{id:'events'},String(events.value))]),
h(DropdownMenu,{}, {default:()=>h(DropdownItem,{modelValue:value.value,'onUpdate:modelValue':v=>value.value=v,onChange:()=>events.value++,disabled:disabled.value,title:'Fruit',options})})])
}}).mount('#app')
