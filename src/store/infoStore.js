import { writable } from 'svelte/store';

export const info = writable({
    siteName: 'Sample Svelte app with Tailwind CSS & Storybook',
    byLine: 'Rethinking the menu',
    address: 'http://localhost:5000',
    GitHub: 'https://github.com/masumomo/svelte-storybook-github-template',
    parts: ['test.html'],
    local: false,
    styles: {
        theme: 'light',
        backgroundColor: '##eeeeee',
        backgroundPicture: '',
        borderColor: '#AA7942',
        divColor: '#ECDAAC',
        divBackgroundPicture: '',
        borderSize: '5px',
        borderRadius: '10px',
        textColor: 'black',
        font: '20px Times New Romand, Arial',
        headerFont: '20px Verdana, Arial',
        navFontSize: '24px',
        navHoverColor: 'blue',
        showlogo: false,
        showSideBar: false,
        sideBarLeft: false,
        widthLogo: 920,
        widthNavbar: 700,
        widthSidebar: 900
    }
});


