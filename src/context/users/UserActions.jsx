import axios from "axios";

const proxy = axios.create({
    baseURL: 'https://api.github.com'
})

export const searchUsers = async (user) => {
    const params = new URLSearchParams({
        q: user
    })

    const response = await proxy.get(`/search/users?${params}`)

    return response.data.items
    // const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`);

    // const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`
    //     , {
    //         headers: {
    //             Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
    //         }
    //     });
    // const { items } = await response.json()

    // return items
}

export const getUser = async (login) => {
    const response = await proxy.get(`/users/${login}`)

    if (response.status === 404) {
        window.location = '/notfound'
    }
    return response.data

    // const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}`);

    // const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}`
    //     , {
    //         headers: {
    //             Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
    //         }
    //     });

    // if (response.status === 404) {
    //     window.location = '/notfound'
    //     return
    // }
    // return await response.json()
}

export const getRepos = async (login) => {
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10
    })

    const response = await proxy.get(`/users/${login}/repos?${params}`);
    return response.data

    // const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos?${params}`);

    // const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos?${params}`
    //     , {
    //         headers: {
    //             Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
    //         }
    //     });

    // if (response.status === 404) {
    //     window.location = '/notfound'
    //     return
    // }
    // return await response.json()
}