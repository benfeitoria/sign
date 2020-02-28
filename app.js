const vm = new Vue({
    el: "#app",
    data: {
        clipped: false,
        name: 'John Doe',
        role: 'Developer',
        email: 'joh.doe',
        phone: '+55 (99) 99999-9999',
        url: {
            blog: 'https://blog.benfeitoria.com',
            site: 'https://benfeitoria.com',
            instagram: null,
            facebook: null,
            linkedin: null,
            twitter: null
        }
    },
    methods: {

    },
    watch: {

    },
    computed: {
        html() {
            return ``;
        },
        computedCode() {
            return this.name;
        }
    },
    created(){
        const clipboard = new ClipboardJS('#copy-html');
        clipboard.on('success', (e) => {
            e.clearSelection();
            this.clipped = true;
        });
    }
});