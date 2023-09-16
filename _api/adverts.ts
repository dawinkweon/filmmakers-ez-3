const findAll = async () => {
    const res = await fetch("api/ads");
    const json = await res.json();
    return json;
};

export const advertsApi = { findAll };