import { AboutMe } from "../model/aboutme";
import { Project } from "../model/project";


export const mockLogin = (userName: string, password: string) => new Promise<TokenResponse>(function (resolve, rejected) {
    setTimeout(() => {
        if (userName === "fredyzurita2210@gmail.com" && password === "Ecuador2021") {
            resolve(JSON.parse(
                `{
                 "access_token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOnsidXNlcklkIjo2NjYsInJvbGUiOiJhZG1pbiIsInVzZXJOYW1lIjoiYWRtaW4iLCJkaXNwbGF5TmFtZSI6ImFkbWluIn0sImlhdCI6MTYwMTAyNzU1MywibmJmIjoxNjAxMDI3NTUzLCJleHAiOjE2MDExMTM5NTN9.vHgVtxKGmwDDLLVuT63UBkP8xe4a9hH0B3kkCsAh7K8",
                 "expires_in": 3600,
                 "token_type": "bearer"
                 }`
            ));
        } else {
            rejected(new Unauthorized());
        }
    }, 2000);
    
})
export interface TokenResponse {
    access_token: string;
    expires_in: number;
    token_type: string;
}
export interface ApiError {
    description?: string;
}
export class Unauthorized implements ApiError { }



export const mockAboutme = () => new Promise<AboutMe>(function (resolve, rejected) {
    setTimeout(() => {
        resolve(JSON.parse(
            `{
            "id":"12389asdfasf8",
            "name":"Fredy Zurita Freire",
            "birthday":277963750,
            "nationality":"Ecuatoriano",
            "job":"Desarrollador para Smartwork S.A.",
            "github":"https://github.com/Fredyz1978"
            }`
        ));
    }, 500);
});

export const mockNewProject = (title: string, description: string, tags: string, version: string) => new Promise<Project>(function (resolve, rejected) {
    setTimeout(() => {
        resolve(JSON.parse(
            `{
                "id":"12349as8df90",
                "title":"${title}",
                "description":"${description}",
                "version":"${version}",
                "tag":"${tags}"
            }`
        ));
    }, 500);
});

export const mockProjects = () => new Promise<Project[]>(function (resolve, rejected) {
    setTimeout(() => {
        resolve(JSON.parse(
            `[
                {
                "id":"12349as8df90",
                "title":"Full Stack Curso Nivelador",
                "description":"Este es un pequeño proyecto que usa express y cowsay para mostrar un mensaje. De manera adicional este proyecto realiza una petención get usando el puerto 3000.",
                "version":"0.1",
                "link":"https://github.com/Fredyz1978/FullStackCursoNivelador",
                "tag":"JavaScript",
                "timestamp":"765817712000"
                },
                {
                "id":"789asdfas89",
                "title":"Curso JavaScript",
                "description":"JavaScript es uno de los lenguajes de programación más populares que existen en el mundo. De acuerdo a la encuesta anual de desarrolladores de Stack Overflow se encuentra en el número 1 de tecnologías más pupulares.",
                "version":"1.0.0",
                "link":"https://github.com/Fredyz1978/Javascript-Course",
                "tag":"Hmtl",
                "timestamp":"765817712001"
                },
                {
                "id":"56765asdfasdf8",
                "title":"Styled components",
                "description":"Librería que permite usar template literals y css para crear estilos en componente con JavaScript",
                "version":"5.2.1",
                "link":"https://styled-components.com/docs",
                "tag":"CSS, JavaScript, Babel",
                "timestamp":"765817712002"
                },
                {
                "id":"56765asdfasdf8",
                "title":"React i18next",
                "description":"Internacionalización de nuestro proyecto en React.",
                "version":"19.9.2",
                "link":"https://react.i18next.com",
                "tag":"JavaScript, i18n, React",
                "timestamp":"765817712003"
                },
                {
                "id":"25634iuoasdf8",
                "title":"React Lottie",
                "description":"Animaciones en alta calidad que cuentan con distintos tipos de reproducción.",
                "version":"1.2.3",
                "link":"https://airbnb.design/lottie/",
                "tag":"Animation, React, Aribnb",
                "timestamp":"765817712004"
                },
                {
                "id":"7890asdf890",
                "title":"React Router",
                "description":"Navegación entre páginas dentro de nuestra web app.",
                "version":"5.2.0",
                "link":"https://reactrouter.com/web/guides/quick-start",
                "tag":"Navigation, routing",
                "timestamp":"765817712005"
                },
                {
                "id":"7890asdf890",
                "title":"Swagger",
                "description":"Herramienta para creación de especificaciones OpenAPI",
                "version":"3.0,2",
                "link":"https://swagger.io",
                "tag":"API, OpenAPI",
                "timestamp":"765817712006"
                },
                {
                "id":"7890asdf890",
                "title":"Figma",
                "description":"Herramienta de diseño vectorial y prototipado",
                "version":"-",
                "link":"https://www.figma.com/proto/3e43h8TrzwpjfKwXvFxZoP/Taller?page-id=144%3A51&node-id=308%3A1187&viewport=254%2C48%2C0.12&scaling=min-zoom&starting-point-node-id=147%3A3",
                "tag":"Vector, UX, UI",
                "timestamp":"765817712007"
                },
                {
                    "id":"7890asdf890",
                    "title":"Typescript Webpack",
                    "description":"Herramienta de diseño vectorial y prototipado",
                    "version":"v0.1",
                    "link":"https://github.com/Fredyz1978/TypescriptWeatherExample",
                    "tag":"Typescript",
                    "timestamp":"765817712007"
                }
            ]`
        ));
    }, 500);

});