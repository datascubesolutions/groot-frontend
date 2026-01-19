/**
 * Generic API Client
 * @module lib/api/client
 */

const headers = {
    "Content-Type": "application/json",
};

const handleResponse = async (response) => {
    const data = await response.json();
    if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }
    return data;
};

export const apiClient = {
    get: async (url) => {
        const response = await fetch(url, {
            method: "GET",
            headers,
        });
        return handleResponse(response);
    },

    post: async (url, body) => {
        const response = await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
        });
        return handleResponse(response);
    },

    put: async (url, body) => {
        const response = await fetch(url, {
            method: "PUT",
            headers,
            body: JSON.stringify(body),
        });
        return handleResponse(response);
    },

    delete: async (url, body = {}) => {
        const response = await fetch(url, {
            method: "DELETE",
            headers,
            body: JSON.stringify(body),
        });
        return handleResponse(response);
    },
};
