import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createDirection = async (type) => {
    const {data} = await $authHost.post('api/direction', type)
    return data
}

export const fetchDirections = async () => {
    const {data} = await $host.get('api/direction')
    return data
}


export const createSubstance = async (substance) => {
    const {data} = await $authHost.post('api/substance', substance)
    return data
}

export const fetchSubstances = async (direction_id, page, limit= 10) => {
    const {data} = await $host.get('api/substance', {params: {
        direction_id, page, limit
        }})
    return data
}

export const fetchOneSubstance = async (id) => {
    const {data} = await $host.get('api/substance/' + id)
    return data
}