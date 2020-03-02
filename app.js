Vue.use(VueMask.VueMaskPlugin);

const vm = new Vue({
    el: "#app",
    data: {
        clipped: false,
        clippedTimeout: null,
        name: 'Ben Feitor',
        role: 'Colaborador',
        email: 'ben@benfeitoria.com',
        phone: '+55 (99) 99999 9999',
        url: {
            blog: 'https://blog.benfeitoria.com',
            site: 'https://benfeitoria.com',
            instagram: "https://www.instagram.com/benfeitores/",
            facebook: "https://www.facebook.com/benfeitoria/",
            linkedin: "https://www.linkedin.com/company/benfeitoria/",
            twitter: "https://twitter.com/benfeitoria"
        },
        phone_mask: '+## (##) ##### ####',
        storage_infos: ['name','role','email','phone']
    },
    methods: {
        getStorageKeyName(info){
            return `SignAppStorageData|${info}`
        },
        getStorageValue(info){
            let data = JSON.parse(window.localStorage.getItem(
                this.getStorageKeyName(info)
            ));

            return data !== null ? data : ''
        },
        setStorageValue(info,value){
            window.localStorage.setItem(
                this.getStorageKeyName(info),
                JSON.stringify(value)
            );
        },
        getInformationsFromStorage(){
            for(let info of this.storage_infos){
                if(this.getStorageValue(info).toString().length){
                    this[info] = this.getStorageValue(info).toString();
                }
            }
        },
        clippedHandler(){
            this.clipped = true;
            clearTimeout(this.clearTimeout);

            this.clearTimeout = setTimeout(() => {
                this.clipped = false;
            },8000);
        }
    },
    watch: {
        name(value){
            this.setStorageValue("name",value);
        },
        role(value){
            this.setStorageValue("role",value);
        },
        email(value){
            this.setStorageValue("email",value);
        },
        phone(value){
            this.setStorageValue("phone",value);
        }
    },
    computed: {
        html() {
            return ``;
        },
    },
    created(){
        this.getInformationsFromStorage();


        const clipboard = new ClipboardJS('#copy-html');

        clipboard.on('success', (e) => {
            e.clearSelection();
            this.clippedHandler();
        });
    }
});