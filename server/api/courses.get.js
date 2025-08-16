export default defineEventHandler(() => {
    return [
        {
            id: 1,
            title: 'Creación de aplicaciones web modernas con Laravel y Vuejs',
            year: 2020,
            skills: [
                { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
                { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
                { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
                { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
                { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
                { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
                { name: 'Auth', icon: 'mdi mdi-login', color: '#000000' },
            ],
            uri: 'https://www.udemy.com/course/creacion-de-aplicaciones-web-modernas-con-laravel-y-vuejs/...',
            image: 'course-1.jpg',
            alt: 'Imagen del curso Creación de aplicaciones web modernas con Laravel y Vuejs'
        },
        {
            id: 2,
            title: 'Consumo de APIS con Laravel y Vuejs',
            year: 2024,
            skills: [
                { name: null, icon: 'mdi mdi-api', color: '#000000' },
                { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
                { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
                { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
                { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
                { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
            ],
            uri: 'https://www.udemy.com/course/consumo-de-apis-con-laravel-vuejs/...',
            image: 'course-2.png',
            alt: 'Imagen del curso Consumo de APIS con Laravel y Vuejs'
        }
    ]
})
