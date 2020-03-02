Vue.use(VueMask.VueMaskPlugin);

const vm = new Vue({
    el: "#app",
    data: {
        clipped: false,
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
        phone_mask: '+## (##) ##### ####'
    },
    methods: {

    },
    watch: {

    },
    computed: {
        html() {
            return ``;
        },
    },
    created(){
        const clipboard = new ClipboardJS('#copy-html');
        clipboard.on('success', (e) => {
            e.clearSelection();
            alert("Copiado!");
            this.clipped = true;
        });
    }
});